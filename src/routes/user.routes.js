// user controller
import {
  login,
  profile,
  affiliate,
  withdraw,
  myProject,
} from "../controllers/user.controller.js";

export const route = (app) => {
  // login page
  app.get("/user/login", login);

  // profile page
  app.get("/user/profile", profile);

  // affiliate page
  app.get("/user/affiliate", affiliate);

  // withdraw page
  app.get("/user/withdraw", withdraw);

  // my project page
  app.get("/user/my-project", myProject);
};
