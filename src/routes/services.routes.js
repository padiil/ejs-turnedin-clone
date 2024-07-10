// services controller
import {
  cekTurnitin,
  parafraseIn,
  translateIn,
  sarangFreelance,
} from "../controllers/services.controller.js";

export const route = (app) => {
  // cek turnitin page
  app.get("/cek-turnitin", cekTurnitin);

  // prafrase page
  app.get("/parafrase-in", parafraseIn);

  // translate page
  app.get("/translate-in", translateIn);

  // sarang freelance page
  app.get("/sarang-freelance", sarangFreelance);
};
