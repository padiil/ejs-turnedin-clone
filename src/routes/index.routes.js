import { home } from "../controllers/general.controller.js";
import {
  login,
  profile,
  cekTurnitin,
  parafraseIn,
  translateIn,
  sarangFreelance,
} from "../controllers/services.controller.js";

export const route = (app) => {
  // home page
  app.get("/", home);

  // cek turnitin page
  app.get("/cek-turnitin", cekTurnitin);

  // prafrase page
  app.get("/parafrase-in", parafraseIn);

  // translate page
  app.get("/translate-in", translateIn);

  // sarang freelance page
  app.get("/sarang-freelance", sarangFreelance);

  // login page
  app.get("/login", login);

  // profile page
  app.get("/profile", profile)
};
