import { mongoose } from "mongoose";

const playListSchema = mongoose.Schema({
  name: String,
  creator: String,
  year: Number,
});

const playList = mongoose.model("playList", playListSchema);
export default playList;
