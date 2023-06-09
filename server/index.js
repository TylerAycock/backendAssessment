const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getMotivated,
    createPoster,
    updateCounter
} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/cookie", getFortune)
app.get("/api/poster", getMotivated)
app.post("/api/poster", createPoster)
app.put("/api/counter", updateCounter)

app.listen(4000, () => console.log("We are up and running on localhost:4000 SIR!"));
