const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/messages', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log("[#] Success to connect database ")
  })
  .catch((err) => {
    console.error("[ERROR]", err);
  })

module.exports = mongoose;
