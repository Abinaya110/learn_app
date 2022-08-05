const express = require("express");
const app = express();
const { mongoose } = require("mongoose");
const User = require("./modal/Userschema");
// const Movie = require("./modal/Movieschema");
// const Cast = require("./modal/Castschema");
const aurl = "mongodb+srv://myapp:myapp@myapp.36tsc.mongodb.net/test";
const bodyparser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(bodyparser.json());
app.use(cors());

mongoose
  .connect(aurl)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("err", err);
  });

//Register/////////////////////
app.post("/register", async (req, res) => {
  console.log(req.body.email);
  var registercheck = await User.findOne({ email: req.body.email });
  console.log("register", registercheck);

  if (registercheck) {
    console.log("already exsit");
    res.json({ result: "user already exsit" });
  } else {
    let saltvalue = await bcrypt.genSalt(5);
    let newpassword = await bcrypt.hash(req.body.password, saltvalue);

    let user = new User({
      name: req.body.name,
      password: newpassword,
      email: req.body.email,
      age: req.body.age,
    });
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
////////////////////////////////////////////////

// login////////////////////////////////////////

app.post("/login", async (req, res) => {
  console.log(req.body.email);
  const checkemail = await User.findOne({ email: req.body.email });
  console.log("check", checkemail);

  if (!checkemail) {
    console.log("no user exist");
    res.json({ result: "no user exist" });
  } else {
    let match = await bcrypt.compare(req.body.password, checkemail.password);
    console.log(match);
    res.json({ result: `password ${match}` });
  }
});
//login user/////////////////////

app.listen(5000, () => {
  console.log("listerning at 5000");
});
