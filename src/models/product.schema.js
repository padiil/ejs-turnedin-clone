import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  foto: String,
  judul: String,
  isi: String,
  link: String,
});

const product = mongoose.model("Product", productSchema);

export default product;
