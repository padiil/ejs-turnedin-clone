import { route as generalRoute } from "./general.routes.js";
import { route as servicesRoute } from "./services.routes.js";
import { route as userRoute } from "./user.routes.js";

export const route = (app) => {
  // call general route
  generalRoute(app);

  // call services route
  servicesRoute(app);

  // call user route
  userRoute(app);
};
