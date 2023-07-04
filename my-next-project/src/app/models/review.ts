import mongoose, { Schema, model, models, mongo } from "mongoose";

const reviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  rating: {
    type: Number,
  },
  comments: [{ body: String, date: Date }],
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export const Review = models.Review || model("Review", reviewSchema);
