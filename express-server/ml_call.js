
const express = require('express');
const app = express();
const axios=require('axios');
// GET request to the root path
console.log("lllllllllllllllll");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode


//The model exists on http://127.0.0.1:5000/predict
//Now we have to create a post request on the model at localhost:5000
app.post('/ml_prediction',(req,res)=>{console.log("calling ml api");
    text=req.body.text;
    axios.post('http://127.0.0.1:5000/predict',{text:text}).
    then((mlRes)=>{console.log("getting result :",mlRes.data);
        res.send(mlRes.data);
    }).catch(error => {
        console.error("Error calling ML API:", error);
        res.status(500).send({ error: "ML Service unavailable" });
    });
    });
app.listen(4000)