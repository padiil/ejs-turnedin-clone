// general controller
import { home } from "../controllers/general.controller.js";

export const route = (app) => {
  // home page
  app.get("/", home);
};