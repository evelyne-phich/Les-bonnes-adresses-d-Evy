const express = require("express");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index", { pageTitle: "Toutes les adresses" });
});
app.get("/chinois", (request, response) => {
  response.render("chinois", { pageTitle: "Chinois" });
});
app.get("/francais", (request, response) => {
  response.render("francais", { pageTitle: "Français" });
});
app.get("/franco-japonais", (request, response) => {
  response.render("francoJaponais", { pageTitle: "Franco-Japonais" });
});
app.get("/italien", (request, response) => {
  response.render("italien", { pageTitle: "Italien" });
});
app.get("/japonais", (request, response) => {
  response.render("japonais", { pageTitle: "Japonais" });
});
app.get("/peruvien", (request, response) => {
  response.render("peruvien", { pageTitle: "Péruvien" });
});

app.listen(PORT, () => {
  console.log(`The server is listening on: http://localhost:${PORT}`);
});
