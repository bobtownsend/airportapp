const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  userEmail: [String],
  events: [
    {
      title: [String],
      allDay: [Boolean],
      start: [Date],
      end: [Date],
      desc: [String]
    }
  ]
});
const ModelClass = mongoose.model("events", eventSchema);

// Export the model
module.exports = ModelClass;
