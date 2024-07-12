// cek turnitin page
const cekTurnitin = (req, res) => {
  res.render("pages/cek-turnitin/cek-turnitin.ejs", {
    page: "cek-turnitin",
    title: "Cek Turnitin",
  });
};

// parafrase page
const parafraseIn = (req, res) => {
  res.render("pages/parafrase-in/parafrase-in.ejs", {
    page: "parafrase-in",
    title: "Parafrase",
  });
};

// translate page
const translateIn = (req, res) => {
  res.render("pages/translate-in/translate-in.ejs", {
    page: "translate-in",
    title: "Translate",
  });
};

// sarang freelance page (fetch data from API)
// const sarangFreelance = async (req, res) => {
//   // fetch data products
//   const resultProject = await fetch("http://192.168.18.22:3000/project", {
//     method: "GET",
//   });
//   const project = await resultProject.json();

//   res.render("pages/sarang-freelance/sarang-freelance.ejs", {
//     project,
//     page: "sarang-freelance",
//     title: "Sarang Freelance",
//   });
// };

// sarang freelance page (fetch data from local JSON)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mendefinisikan __filename dan __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sarangFreelance = async (req, res) => {
  // Baca data project dari local JSON
  const projectFilePath = path.join(__dirname, '../data/local-json/freelanceData.json');
  const projectData = fs.readFileSync(projectFilePath);
  const project = JSON.parse(projectData);

  res.render('pages/sarang-freelance/sarang-freelance.ejs', {
    project,
    page: 'sarang-freelance',
    title: 'Sarang Freelance',
  });
};

export { cekTurnitin, parafraseIn, translateIn, sarangFreelance };
