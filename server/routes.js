const router = require("express").Router();

const users = require("./users");

router.post("/users", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Origin"
  );
  res.send(users);
});

router.get("/createAccount", (req, res) => {
  res.render("pages/create-account/index");
});

module.exports = router;

