const express = require("express");
const app = express();
const PORT = 8088;
const doctors = require("./doctors.json");

app.listen(PORT, () => {
    console.log("Listening");
});

app.get("/doctors", (req, res) => {
    const city = req.query.city; 
    console.log(city);
    const filterData = doctors.filter((item) => item.city.toLowerCase() === city.toLowerCase());
    
    res.json(filterData);
});

