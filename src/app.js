const express = require("express");
const path = require("path");
const app = express();
const model = require('./models/models')
const dotenv = require('dotenv');
dotenv.config();
const connectdb = require('./db/mongoose');
const hbs = require("hbs");
const { Script } = require("vm");
//const mid = require('../templates/mid/mid.html')
const port = process.env.PORT || 3000;



const stactic_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, '../templates/views');
//const partials_path = path.join(__dirname, '../templates/partials')

connectdb;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(stactic_path));
app.set('view engine',"hbs");
app.set('views', template_path)
//app.set('partials', partials_path)
//hbs.registerPartials(partials_path)


app.get("/", (req, res) => {
  res.render("index");
});

app.get('/register', (req, res)=>{
  res.redirect('/')
})

app.post('/register', async (req, res)=>{

  const registerUser =  new model({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    contact:req.body.contact,
    city:req.body.city,
    age:req.body.age})

  try{
    await registerUser.save();
    res.status(201).render('index');
  }catch(e){
    res.status(208).send('user already exist')
  }
})


app.listen(port, () => {
  console.log(`Server is online on ${port}`);
});
