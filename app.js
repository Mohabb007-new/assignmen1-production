const axios=require('axios')
const express = require('express');
const app = express();
// GET request to the root path
app.listen(4000)
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const cars = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Mercedes' },
   ];
app.get('/', (req, res) => {
    res.send("hhhhhhhhhhhhhhhh");
   });


app.get('/cars', (req, res) => {
    // Replace this with your actual data retrieval logic
    const cars = [
    { id: 10, name: 'BMW' },
    { id: 2, name: 'Mercedes' },
    ];
    res.json(cars);
   });
// POST request to the /cars endpoint
app.post('/cars', (req, res) => {
    // Replace this with your actual data creation logic
    const newCar = {
    id: req.body.id,
    name: req.body.name,
    };
    // Add the new car to the existing cars array (temporary storage)
    cars.push(newCar);
    res.status(201).json(newCar);
   });
console.log(cars)
