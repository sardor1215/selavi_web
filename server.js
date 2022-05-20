/*jshint esversion: 6 */
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));





app.get("/", (req, res) =>{
  res.render("home");
});

app.get("/about", (req, res) =>{
  res.render("about");
});
app.get("/contact", (req, res) =>{
  res.render("contact");
});
app.post('/contact', (req, res) => {
  res.redirect(307, "/form-control");
})
app.post("/form-control", (req, res) => {
  var names = req.body.namesur;
  res.render("form-control", {name:names})
})
app.post("/pasta", (req, res) => {
  res.render("newsletter_post")
})

app.listen(process.env.PORT || 3000, (err) => {
  if(!err){
    console.log("Server is running");
  }else{
    console.error(err);
  }
});