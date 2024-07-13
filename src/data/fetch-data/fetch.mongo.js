// sarang freelance page
import project from "../../models/project.schema.js";
import testimoni from "../../models/testimoni.schema.js";
import product from "../../models/product.schema.js";
import mongoose from "mongoose";

// connect to mongodb
const connectMongodb = mongoose
  .connect("mongodb://localhost:27017/turnedin_clone")
  .then((result) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// home page
const home = async (req, res) => {
  try {
    // Fetch data from MongoDB
    const products = await product.find();
    const testimonis = await testimoni.find();

    // Render home page
    res.render("pages/home/home.ejs", {
      products,
      testimonis,
      page: "home",
      title: "Home",
    });
  } catch (err) {
    console.error("Error fetching data from MongoDB", err);
    res.status(500).send("Error fetching data");
  }
};

const sarangFreelance = async (req, res) => {
  try {
    // Fetch data from MongoDB
    const projects = await project.find();

    // Render to sarang-freelance page
    res.render("pages/sarang-freelance/sarang-freelance.ejs", {
      project: projects,
      page: "sarang-freelance",
      title: "Sarang Freelance",
    });
  } catch (err) {
    console.error("Error fetching data from MongoDB", err);
    res.status(500).send("Error fetching data");
  }
};

export { connectMongodb, home, sarangFreelance };
