const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  chartId: { type: String, required: true },
  title: { type: String, required: true },
  dataType: { type: String, required: true },
  locals: {
    'data-loss': { type: String },
    currency: { type: String },
  },
  data: [
    {
      country: { type: String },
      phising: { type: Number },
      awarness: { type: Number },
      company: { type: String },
      'data-loss': { type: Number },
      'comromised-accounts': { type: Number },
      ransomware: { type: Number },
      malware: { type: Number },
      'total-financial-loss': { type: Number },
    },
  ],
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
