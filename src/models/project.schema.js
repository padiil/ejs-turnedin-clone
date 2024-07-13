import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
  fotoProfil: String,
  nama: String,
  judul: String,
  harga: { mulaiDari: Number, sampai: Number },
  penawaran: {
    penawar: Number,
    hargaPenawaran: Number,
  },
  deskripsi: String,
  badge: [String],
  status: String,
  tanggal: String,
});

const project = mongoose.model("Project", projectSchema);

export default project;
