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

// sarang freelance page

// data from mongodb
// import { sarangFreelance } from "../data/fetch-data/fetch.mongo.js";

// data from local
import { sarangFreelance } from "../data/fetch-data/fetch.local.js";

// fetch from server
// import {sarangFreelance} from "../data/fetch-data/fetch.server.js"


export { cekTurnitin, parafraseIn, translateIn, sarangFreelance };
