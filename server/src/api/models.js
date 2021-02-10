//@ts-check
// define all product models
import mongoose from "mongoose";

const repoSchema = new mongoose.Schema({
  repo_id: {
    type: String,
    unique: true,
    required: [true, "Please include the repo id"],
  },
  name: {
    type: String,
    unique: true,
    required: [true, "Please include the repo name"],
  },
  owner: {
    type: String,
    required: [true, "Please include the repo owner"],
  },
  description: {
    type: String,
    required: [true, "Please include the repo description"],
  },
  stars: {
    type: String,
    required: [true, "Please include the stars"],
  },
  bookmarked: {
    type: Boolean,
    default: false,
  }
});

const Repo = mongoose.model("Repo", repoSchema);

export default Repo;
