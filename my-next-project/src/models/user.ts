import { Schema, model, models } from "mongoose";
import validator from "validator";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (e: any) => {
          return validator.isEmail(e);
        },
        message: "Email is invalida format",
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar: {
      type: String,
      required: false,
      validate: {
        validator(value: any) {
          return validator.isURL(value);
        },
        message: "You must enter a valid URL",
      },
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model("User", userSchema);
