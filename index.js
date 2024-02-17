const express = require("express");
const app = express();
 const port = 3000;
 const path = require("path");

//example of displaying simple html
 app.set("view engine", "ejs");
 app.set("views",path.join(__dirname,"/views"));

 app.get("/",(req , res) => {
 	res.render("home.ejs");
 });






 //example of displaying instagram
 app.get("/ig/:username",(req , res) => {

 	let { username } = req.params;

   const instadata = require("./data.json");

   const data = instadata[username];

  if(data) {
  	res.render("instagram.ejs", {data});
  }else {
  	res.render("error.ejs");
  }

 	
 });












//example of rolldice
 app.get("/rolldice",(req , res) => {

 	let dicevals = Math.floor(Math.random() * 6) + 1;
 	res.render("rolldice.ejs",{ dicevals });
 });

//displaying simple hello on web page
 app.get("/hello",(req , res) => {
 	res.send("hello");
 });

//app is listening
 app.listen(port, () =>{
 	console.log(`listening on port ${port}`);
 });