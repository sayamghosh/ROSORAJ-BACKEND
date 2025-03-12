const mongoose = require("mongoose");

const sweetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price_per_piece: {
    type: Number,
  },
  price_per_kg: {
    type: Number,
  },
  availability: {
    type: String,
    enum: ["Available", "Seasonal", "Out of Stock"],
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
  },
});

// Exporting the model
const Sweet = mongoose.model("Sweet", sweetSchema);
module.exports = Sweet;
