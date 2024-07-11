// login page
const login = (req, res) => {
  res.render("pages/login/login.ejs", {
    page: "login",
    title: "Login User",
  });
};

// profile page
const profile = (req, res) => {
  res.render("pages/user/profile/profile.ejs", {
    page: "profile",
    title: "Profile User",
  });
};

// affiliate page
const affiliate = (req, res) => {
  res.render("pages/user/affiliate/affiliate.ejs", {
    page: "affiliate",
    title: "Affiliate User",
  });
};

// withdraw page
const withdraw = (req, res) => {
  res.render("pages/user/withdraw/withdraw.ejs", {
    page: "withdraw",
    title: "Withdraw User",
  });
};

// my project page
const myProject = (req, res) => {
  res.render("pages/user/my-project/my-project.ejs", {
    page: "my-project",
    title: "My Project User",
  });
};

export { login, profile, affiliate, withdraw, myProject };
