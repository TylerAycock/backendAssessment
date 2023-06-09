const { title } = require("process");
let posterID = 3
let count = 0

 const posters = [
        {
            title: `Hang in there`,
            img: "https://m.media-amazon.com/images/I/61UxTTMY86L._AC_SX679_.jpg"
        },
        {
            title: `Ambition`,
            img: "https://m.media-amazon.com/images/I/51AjFAtuqpL._AC_SX679_.jpg"
        },
        {
            title: `Triumph`,
            img: "https://m.media-amazon.com/images/I/41REi2fTT9L._AC_SX679_.jpg"
        }
 ]

 const fortunes = [`A lifetime of happiness lies ahead of you`,`A smooth long journey! Great expectations.`,`An important person will offer you support.`,`Congratulations! You are on your way.`,`Dedicate yourself with a calm mind to the task at hand.`]


module.exports = {
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, resp) => {
        let randomFortune = Math.floor(Math.random()*fortunes.length)
        let myFortune = fortunes[randomFortune]

        resp.status(200).send(myFortune)
    },
    getMotivated: (req, resp) =>{
        resp.status(200).send(posters)
    },
    createPoster: (req, resp) =>{
        req.body.title = title
        req.body.img = img
        posters.push(req.body)
        resp.status(200).send(posters)
        // posterID++
    },
    updateCounter: (req, resp) =>{
        console.log(req.body)
        if(req.body=== `minus`){
            count--
        }
        if (req.body === `plus`) {
            count++
        }
        resp.status(200).send(count)
    }
}
