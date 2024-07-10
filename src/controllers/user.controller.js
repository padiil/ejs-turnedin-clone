// login page
const login = (req, res) => {
  res.render("pages/login/login.ejs");
};

// profile page
const profile = (req, res) => {
  res.render("pages/user/profile/profile.ejs");
};

// affiliate page
const affiliate = (req, res) => {
  res.render("pages/user/affiliate/affiliate.ejs");
};

// withdraw page
const withdraw = (req, res) => {
  res.render("pages/user/withdraw/withdraw.ejs");
};

// my project page
const myProject = (req, res) => {
  res.render("pages/user/my-project/my-project.ejs");
};

export { login, profile, affiliate, withdraw, myProject };
