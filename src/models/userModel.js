import { model, Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    default:
      "https://m.media-amazon.com/images/M/MV5BYmQwYTc1ZDEtMzU3My00OTIzLWE1YmEtYmUyMmMzZTI2ZWNlXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_.jpg",
  },
  username: {
    type: String,
    required: true,
    minlength: [3, "username can't be less than 3 Characters"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Provide a valid email",
    ],
  },
  school: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

export default User;
