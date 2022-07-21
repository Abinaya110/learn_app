const express = require("express");
const app = express();
const { mongoose } = require("mongoose");
const User = require("./modal/Userschema");
const Movie = require("./modal/Movieschema");
const Cast = require("./modal/Castschema");
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
// create movie /////////////
app.post("/addmovies/:name", (req, res) => {
  console.log(req);
  let name = req.body.name;
  let year = req.body.year;
  let cast = req.body.cast;
  let director = req.body.director;
  let music = req.body.music;
  let boxoffice = req.body.boxoffice;









  // let {name,year,cast,director,music,boxoffice}=req.body

  let movie = new Movie({
    name: name,
    year: year,
    cast: cast,
    director: director,
    music: music,
    boxoffice: boxoffice,
  });
  movie
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

///////////////////////////////////









  //let{name,age,hobby}=req.body
app.post("/cast", (req, res) => {
  console.log(req.body);
  let castname = req.body.castname;
  let age = req.body.age;
  let hobby = req.body.hobby;


  let cast = new Cast({
    castname: castname,
    age: age,
    hobby: hobby,
  });

  cast
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
////////////////////////////////////////////












//add user/////////////////////
app.post("/register", async (req, res) => {
  console.log(req.body.email);
  var registercheck = await User.findOne({ email: req.body.email });
  console.log("hdkjf", registercheck);

  if (registercheck) {
    console.log("already exsit");
    res.json({ result: "user already exsit" });

  } else {
    let newpassword = await bcrypt.hash(req.body.password, 12);
    console.log(newpassword);

    let user = new User({
      name: req.body.name,
      password: newpassword,
      email: req.body.email,
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
////////////////////////end add user/////////

















// find movies by hero name ////////////
app.post("/hname", async (req, res) => {
  console.log(req.body);
  let year = req.body.year;
  let resultmovie = await Movie.find({ year:{ $gt:year}});
  var resultname = resultmovie.map(ele => (ele.name))
  console.log("check name",resultname);
  res.json({"list of names":resultname});

});

////////////////////({ music: { $ne: music } });////////////////////











//login user/////////////////////

app.post("/login", async (req, res) => {
  console.log("login body", req.body);
});
///////////////end login user//////////////













// editmovie /////////////
app.patch("/addmovies", async (req, res) => {
  console.log(req.body);
  let find = req.body.find;
  let replace = req.body.replace;
  let mname = req.body.mname;
  let resultmovie = await Movie.findOne({ name:mname});
  // let resultmovie = await Movie.updateOne({ name:mname},{ $set :{boxoffice:50,cast:replace}});
  let cast = resultmovie.cast 
  console.log("before change",cast)
  let seatno = cast.indexOf(find)
  cast[seatno]=replace
  console.log("after change",cast)
  let outputmovie = await Movie.updateOne({ name:mname},{ $set :{boxoffice:50,cast:cast}});

res.json(outputmovie)
  // let {name,year,cast,director,music,boxoffice}=req.body

  // let movie = new Movie({
  //   name: name,
  //   year: year,
  //   cast: cast,
  //   director: director,
  //   music: music,
  //   boxoffice: boxoffice,
  // });
  // movie
  //   .save()
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

///////////////////////////////////
















































































app.listen(5000, () => {
  console.log("listerning at 5001");
});
