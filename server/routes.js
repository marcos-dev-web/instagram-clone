const bodyParser = require('body-parser');
const express = require("express")
const router = express.Router();

router.use(express.json())

const users = require("./users");

const Messages = require('./database/Schema'); //Collection of messages

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

router.post('/save_message', async (req, res) => {

  let messages = req.body

  console.log(messages)

  await Messages.deleteMany({})

  let Table = new Messages({
    messages: JSON.stringify(messages),
  }).save()
  return console.log('saved')
})

router.post('/messagesGet', async (req, res) => {

  const messages = await Messages.find({})

  console.log(messages)

  res.send({
    messages,
  })
})

module.exports = router;

