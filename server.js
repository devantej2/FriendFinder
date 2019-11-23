// Declaring Dependencies for npm packages

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// File to be serve by incoming req.url
app.use(express.static("app/public"));

// Allowing server to use modules
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log(`Listening on port${PORT}`);
}); 