const bodyParser = require('body-parser');
const express = require("express")
const router = express.Router();

router.use(express.json())

const users = require("./users");

const Messages = require('./database/Schema'); //Collection of messages

// this route return the all users that are in the contacts list
router.post("/users", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
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

  let table = new Messages({ messages: JSON.stringify(messages),
  })
  await table.save()
    .then(() => {
      return console.log('saved')
    })
    .catch((err) => {
      console.log('error in save line 42 file routes.js /server', err);
    })

})

router.post('/messagesGet', async (req, res) => {

  let RESULT = await Messages.find({})
  let messages = RESULT[0] ? RESULT[0].messages : '';

  res.send(messages)
})

module.exports = router;
