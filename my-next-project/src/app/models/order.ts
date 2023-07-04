import mongoose, { Schema, model, models, mongo } from "mongoose";

const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "shipped", "delivered"],
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export const Order = models.Order || model("Order", orderSchema);
