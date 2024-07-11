import mongoose from "mongoose";
//Rules and condition to add for the user.....

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //Will add the time of Creation and time of Edit.....
);

const User = mongoose.model("User", userSchema);

export default User;
