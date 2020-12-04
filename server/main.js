const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const cons = require("consolidate");

const routers = require("./routes");
const { simple, protect } = require("./middelwares");

const app = express();

app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "html");

app.use(
  express.static(path.resolve(__dirname, "public", "pages", "create-account"))
);

app.use("/auth", simple);
app.use(protect);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

app.use(routers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SERVER RUNING... ${PORT}`);
});
