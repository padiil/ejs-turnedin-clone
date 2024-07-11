import fetch from "node-fetch";

// home page
export const home = async (req, res) => {
  // fetch data products
  const resultProduct = await fetch("http://192.168.18.22:3000/product", {
    method: "GET",
  });
  const products = await resultProduct.json();

  // fetch data kata mereka
  const resultTestimoni = await fetch("http://192.168.18.22:3000/testimoni", {
    method: "GET",
  });
  const testimoni = await resultTestimoni.json();

  // render to home page
  res.render("pages/home/home.ejs", {
    products,
    testimoni,
    page: "home",
    title: "Home",
  },);
};
