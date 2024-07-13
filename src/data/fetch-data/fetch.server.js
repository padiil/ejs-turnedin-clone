import fetch from "node-fetch";

// home page
const home = async (req, res) => {
  // fetch data products
  const resultProduct = await fetch("http://192.168.18.22:3000/product", {
    method: "GET",
  });
  const products = await resultProduct.json();

  // fetch data testimoni
  const resultTestimoni = await fetch("http://192.168.18.22:3000/testimoni", {
    method: "GET",
  });
  const testimonis = await resultTestimoni.json();

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
  // fetch data products
  const resultProject = await fetch("http://192.168.18.22:3000/project", {
    method: "GET",
  });
  const project = await resultProject.json();

  res.render("pages/sarang-freelance/sarang-freelance.ejs", {
    project,
    page: "sarang-freelance",
    title: "Sarang Freelance",
  });
};

export { sarangFreelance, home };
