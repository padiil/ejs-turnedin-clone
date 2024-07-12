// fetch data from API
// import fetch from "node-fetch";

// // home page
// export const home = async (req, res) => {
//   // fetch data products
//   const resultProduct = await fetch("http://192.168.18.22:3000/product", {
//     method: "GET",
//   });
//   const products = await resultProduct.json();

//   // fetch data testimoni
//   const resultTestimoni = await fetch("http://192.168.18.22:3000/testimoni", {
//     method: "GET",
//   });
//   const testimoni = await resultTestimoni.json();

// console.log(products)
// console.log(testimoni)

//   // render to home page
//   res.render("pages/home/home.ejs", {
//     products,
//     testimoni,
//     page: "home",
//     title: "Home",
//   },);
// };


// local json
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mendefinisikan __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// home page
export const home = async (req, res) => {
  // fetch data products from local json
  const productFilePath = path.join(__dirname, '../data/local-json/productsData.json');
  const productData = fs.readFileSync(productFilePath);
  const products = JSON.parse(productData);

  // fetch data testimoni from local json
  const testimoniFilePath = path.join(__dirname, '../data/local-json/testimoniData.json');
  const testimoniData = fs.readFileSync(testimoniFilePath);
  const testimoni = JSON.parse(testimoniData);

  // render to home page
  res.render('pages/home/home.ejs', {
    products,
    testimoni,
    page: 'home',
    title: 'Home',
  });
};

