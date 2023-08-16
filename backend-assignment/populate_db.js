const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcrypt library
const User = require('./models/User');
const Product = require('./models/Product');
const Analytics = require('./models/Analytics');
const jsonData = require('./data.json');

mongoose.connect('mongodb://localhost:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  const usersCount = await User.countDocuments();
  if (usersCount === 0) {
    // Hash passwords before inserting users
    const hashedUsers = jsonData.users.map(user => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10) // Hash the password
    }));
    
    await User.insertMany(hashedUsers);
    console.log('Users data inserted successfully.');
  } else {
    console.log('Users data already exists. Skipping insertion.');
  }

  const productsCount = await Product.countDocuments();
  console.log("productsCount:", productsCount);
  if (productsCount === 0) {
    await Product.insertMany(jsonData.products);
    console.log('Products data inserted successfully.');
  } else {
    console.log('Products data already exists. Skipping insertion.');
  }


  const analyticsCount = await Analytics.countDocuments();
  if (analyticsCount === 0) {
    await Analytics.insertMany(jsonData.analytics);
    console.log('Analytics data inserted successfully.');
  } else {
    console.log('Analytics data already exists. Skipping insertion.');
  }



})
.then(() => {
  console.log('Data population completed.');
  mongoose.disconnect();
})
.catch(error => {
  console.error('Failed to insert data:', error);
});


