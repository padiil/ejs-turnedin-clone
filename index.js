import express from "express";
import { route } from "./src/routes/index.routes.js";
const app = express();

app.set("views", "src/views/");
app.set("view engine", "ejs");
app.use(express.static("./public"));

// call route function
route(app);

// listen to port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
