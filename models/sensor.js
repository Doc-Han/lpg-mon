const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sensor = new Schema({
  ser_no: String,
  last_online: {
    type: Date
  },
  logs: [
    {
      humidity: Number,
      temperature: Number,
      concentration: Number,
      time_stamp: Date
    }
  ]
});

module.exports = mongoose.model('Sensor', Sensor);
