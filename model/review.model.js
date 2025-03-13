const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    sweetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sweet",
      required: true,
    }, // Reference to Sweet
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Reference to User
    rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1 and 5
    comment: { type: String },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
