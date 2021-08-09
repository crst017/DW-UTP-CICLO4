const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/db");

// Imports de archivos de rutas
const User = require("./routes/user");
const Auth = require("./routes/auth");
const Indicator = require("./routes/indicator");
const Company = require("./routes/company") ;  // Ruta para coleccioncd company
const Register = require("./routes/register");
const Indicator = require("./routes/indicator")
const Service = require("./routes/service")

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Aqui van los use de las rutas
app.use("/api/user/", User);
app.use("/api/auth/", Auth);
app.use("/api/indicator", Indicator);
app.use("/api/company", Company);    //add company route in the app
app.use("/api/register", Register);    
app.use("/api/service", Service);




app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

dbConnection();