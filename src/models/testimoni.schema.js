import mongoose from "mongoose";
const { Schema } = mongoose;

const testimoniSchema = new Schema({
  foto: String,
  nama: String,
  univ: String,
  isi: String,
});

const testimoni = mongoose.model("Testimoni", testimoniSchema);

export default testimoni;
