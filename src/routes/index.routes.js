export const route = (app) => {
  // home page
  app.get("/", (req, res) => {
    res.render("pages/home/home.ejs");
  });

  // cek turnitin page
  app.get("/cek-turnitin", (req, res) => {
    res.render("pages/cek-turnitin/cek-turnitin.ejs");
  });

  // prafrase page
  app.get("/parafrase-in", (req, res) => {
    res.render("pages/parafrase-in/parafrase-in.ejs");
  });

  // translate page
  app.get("/translate-in", (req, res) => {
    res.render("pages/translate-in/translate-in.ejs");
  });

  // sarang freelance page
  app.get("/sarang-freelance", (req, res) => {
    res.render("pages/sarang-freelance/sarang-freelance.ejs");
  });
};
