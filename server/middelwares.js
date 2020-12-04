const simple = (req, res, next) => {
  console.log("user connected");
};

const protect = (req, res, next) => {
  res.set("X-Powered-By", "PHP/7.1.7");
  next();
};

module.exports = {
  simple,
  protect,
};
