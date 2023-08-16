const User = require('../models/User');
const Product = require('../models/Product');
const data = require('../data.json');


function findPasswordByEmail(targetEmail) {
  for (const user of data.users) {
    if (user.email === targetEmail) {
      return user.password;
    }
  }
  return null;
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    for(const user of users){
      let password = findPasswordByEmail(user.email);
      user.password = password;
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

// exports.getUserProducts = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).populate('productFeatures');
//     const products = user.productFeatures;
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };


exports.getUserProducts = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const featureIdsToSearch = user.productFeatures;

    const filteredFeatures = user.productFeatures.filter(featureId =>
      featureIdsToSearch.includes(featureId)
    );

    const flattenedProducts = [];

    for (const featureId of filteredFeatures) {
      const product = await Product.findOne({
        'features.featureId': featureId
      });

      if (product) {
        const matchedFeature = product.features.find(
          feature => feature.featureId === featureId
        );

        if (matchedFeature) {
          flattenedProducts.push(matchedFeature);
        }
      }
    }

    res.json(flattenedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
