// const User = require('../models/User');

// exports.getUserAnalytics = async (req, res) => {
//   try {
//    const user = await User.findById(req.user._id);
//    if (!user) {
//      return res.status(404).json({ message: 'User not found' });
//    }
//    const charts = user.charts;
//    return res.json(charts);
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };





const User = require('../models/User');
const Analytics = require('../models/Analytics');

exports.getUserAnalytics = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // const userCharts = user.charts;
    // console.log("userCharts _   ",userCharts)
    // // Fetch analytics data based on the user's charts
    // const analyticsData = await Analytics.find({ chartId: { $in: userCharts } });


    const userCharts = user.charts;
    console.log('User Charts:', userCharts);

    const analyticsData = await Promise.all(
      userCharts.map(async chartId => {
        return await Analytics.findOne({ chartId });
      })
    );

    console.log('Analytics Data:', analyticsData);






    // Return both user's charts and associated analytics
    return res.json({ charts: userCharts, analytics: analyticsData });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};
