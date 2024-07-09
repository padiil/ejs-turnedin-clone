// login page
const login = (req, res) => {
  res.render("pages/login/login.ejs");
};

// profile page
const profile = (req, res) => {
  res.render("pages/profile/profile.ejs");
};

// cek turnitin page
const cekTurnitin = (req, res) => {
  res.render("pages/cek-turnitin/cek-turnitin.ejs");
};

// parafrase page
const parafraseIn = (req, res) => {
  res.render("pages/parafrase-in/parafrase-in.ejs");
};

// translate page
const translateIn = (req, res) => {
  res.render("pages/translate-in/translate-in.ejs");
};

// sarang freelance page
const sarangFreelance = (req, res) => {
  res.render("pages/sarang-freelance/sarang-freelance.ejs");
};

export { login, profile, cekTurnitin, parafraseIn, translateIn, sarangFreelance };