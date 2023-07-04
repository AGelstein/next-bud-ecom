import mongoose, { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  description: {
    body: String,
    minlength: 2,
    maxlength: 30,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export const Product = models.Product || model("Product", productSchema);
