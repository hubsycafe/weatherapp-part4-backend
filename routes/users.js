var express = require("express");
var router = express.Router();
const { checkBody } = require("../modules/checkBody");

const User = require("../models/users");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!checkBody(req.body)) {
    return res.json({ result: false, error: "Missing or empty fields" });
  }

  User.find({ email }).then((data) => {
    if (data.length) {
      return res.json({ result: false, error: "User already exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });
    newUser.save().then(() => {
      return res.json({ result: true });
    });
  });
});

router.post("/signin", (req, res) => {
  if (!checkBody(req.body)) {
    return res.json({ result: false, error: "Missing or empty fields" });
  }
  User.findOne({ email: req.body.email, password: req.body.password }).then(
    (data) => {
      if (data) {
        res.json({ result: true });
      } else {
        res.json({ result: false, error: "User not found" });
      }
    }
  );
});

module.exports = router;
