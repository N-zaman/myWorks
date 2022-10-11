const express = require('express');
const route = express.Router();
const { home, profile, about, contact, login, update, updateview, delet,
     deletview, registrationview, registation } = require('../hendellar/user.hendeller');



route.get("/",home);
route.get("/about",about);
route.get("/contact",contact);
route.get("/update",updateview);
route.get("/delet",deletview);
route.get("/registration",registrationview);


route.post("/login",login);
route.put("/update",update);
route.delete("/delet",delet);
route.post("/registration",registation);




module.exports = route ;