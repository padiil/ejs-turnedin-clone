// services controller
import {
  cekTurnitin,
  parafraseIn,
  translateIn,
  sarangFreelance,
} from "../controllers/services.controller.js";

export const route = (app) => {
  // cek turnitin page
  app.get("/services/cek-turnitin/order", cekTurnitin);

  // prafrase page
  app.get("/services/parafrase/order", parafraseIn);

  // translate page
  app.get("/services/translate/order", translateIn);

  // sarang freelance page
  app.get("/user/project", sarangFreelance);
};
