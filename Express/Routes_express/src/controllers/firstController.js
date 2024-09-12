const homePage = (req, res) => {
  res.send();
};
const bienvenuePage = (req, res) => {
  res.send("<h1>Bienvenue sur la page de bienvenue");
};
const infoPage = (req, res) => {
  const data = { name: "Thomas", age: 22 }
  res.json(data);
};
const redirect = (req, res) => {
  res.redirect("/");
};
const forbiddenPage = (req, res) => {
  res.status(403).send("403 - Acces denied");
};
const badRoute = (req, res) => {
  res.status(404).send("404 - Page non trouvée");
};

module.exports = {
  homePage,
  bienvenuePage,
  infoPage,
  redirect,
  forbiddenPage,
  badRoute,
};
