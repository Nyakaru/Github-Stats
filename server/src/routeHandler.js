//@ts-check
// global routes handler
import repoRoutes from "./api/main";
const routes = [repoRoutes];

/**
 * @param {{ use: (arg0: import("express-serve-static-core").Router) => void; }} app
 */
export default (app) => {
  routes.forEach((element) => {
    app.use(element);
  });
  return app;
};
