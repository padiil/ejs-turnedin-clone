import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// home page
const home = async (req, res) => {
  // fetch data products from local json
  const productFilePath = path.join(
    __dirname,
    "../local-json/productsData.json"
  );
  const productData = fs.readFileSync(productFilePath);
  const products = JSON.parse(productData);

  // fetch data testimoni from local json
  const testimoniFilePath = path.join(
    __dirname,
    "../local-json/testimoniData.json"
  );
  const testimoniData = fs.readFileSync(testimoniFilePath);
  const testimonis = JSON.parse(testimoniData);

  // render to home page
  res.render("pages/home/home.ejs", {
    products,
    testimonis,
    page: "home",
    title: "Home",
  });
};

// sarang freelance page
const sarangFreelance = async (req, res) => {
  // Baca data project dari local JSON
  const projectFilePath = path.join(
    __dirname,
    "../local-json/projectData.json"
  );
  const projectData = fs.readFileSync(projectFilePath);
  const project = JSON.parse(projectData);

  res.render("pages/sarang-freelance/sarang-freelance.ejs", {
    project,
    page: "sarang-freelance",
    title: "Sarang Freelance",
  });
};

export { home, sarangFreelance };
