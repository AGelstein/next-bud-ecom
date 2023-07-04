import mongoose, { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
});

export const Category = models.Category || model("Category", categorySchema);
