const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');
const fs = require('fs');
const path = require('path')
const app = express();

dotenv.config({
  path: ".env",
});


app.use(express.json());

app.use(bodyParser.json());

app.use(express.static(path.join("backend",'uploads','images')))
// app.use(express.static(path.join('public')));
app.use("/backend/uploads", express.static(__dirname + "/uploads"));

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept,Authorization");
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')
  next();
})

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

const dirName1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirName1, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirName1, "frontend", "build", "index.html"));
  });
  console.log(__dirname)
} else {
  app.get("/", (req, res) => {
    res.send("API running successfully.");
  });
}

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route.', 404);
//   throw error;
// });

app.use((error, req, res, next) => {
  if(req.file){
fs.unlink(req.file.path,(err)=>{

})
  }
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  console.log("backend error:", error)
  res.json({ message: error.message || 'An unknown error occurred!' });
});

console.log(process.env.NODE_ENV)
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ahp3gyl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{ useNewUrlParser: true,useUnifiedTopology: true  })
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .then(()=>{
    console.log("Server Started on port: ", process.env.PORT  )
  })
  .catch(err => {
    console.log(err);
  });

