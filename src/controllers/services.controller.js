// cek turnitin page
const cekTurnitin = (req, res) => {
  res.render("pages/cek-turnitin/cek-turnitin.ejs", {
    page: "cek-turnitin",
    title: "Cek Turnitin",
  });
};

// parafrase page
const parafraseIn = (req, res) => {
  res.render("pages/parafrase-in/parafrase-in.ejs", {
    page: "parafrase-in",
    title: "Parafrase",
  });
};

// translate page
const translateIn = (req, res) => {
  res.render("pages/translate-in/translate-in.ejs", {
    page: "translate-in",
    title: "Translate",
  });
};

// sarang freelance page
const sarangFreelance = async (req, res) => {
  // fetch data products
  const resultProject = await fetch("http://192.168.18.22:3000/project", {
    method: "GET",
  });
  const project = await resultProject.json();

  res.render("pages/sarang-freelance/sarang-freelance.ejs", {
    project,
    page: "sarang-freelance",
    title: "Sarang Freelance",
  });
};

export { cekTurnitin, parafraseIn, translateIn, sarangFreelance };
