const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById(`fortuneBtn`)
const posters = document.getElementById(`posters`)
const mtvtBtn = document.querySelector(`#mtvtBtn`)
const newPosters = document.querySelector(`ul`)
const addPosterBtn = document.querySelector(`form`)

const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');

const baseURL = "http://localhost:4000/api/compliment/"

const getPoster = posterArr => {
    newPosters.innerHTML= ``
    posterArr.forEach((posterObj) => {
        let {title, img} = posterObj
        let posters = document.createElement(`li`)
        let thePoster = document.createElement(`div`)
        let posterTitle = document.createElement(`span`)
        thePoster.innerHTML = `<img src=${img} class="poster-img"/>`
        posterTitle.textContent = title

        posters.appendChild(posterTitle)
        posters.appendChild(thePoster)
        newPosters.appendChild(posters)
        }); 
}


const getCompliment = () => {
    axios.get(baseURL)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune= ()=>{
    axios.get("http://localhost:4000/api/cookie")
    .then (resp =>{
        let fortune = resp.data
        alert(fortune)
    })
    .catch(err=> console.log(err))
}

const getMotivated = () =>{
    axios.get("http://localhost:4000/api/poster")
    .then(resp =>{
        getPoster(resp.data)
        
    })
    .catch(err=> console.log(err))
    
}

const addPoster = () =>{
    // evt.preventDefault()
    posterObj = {
        title: posterObj.title,
        img: posterObj.imgURL
    }
    axios.post("http://localhost:4000/api/poster", posterObj)
    .then(() => { 
        // resp.preventDefault()
        getPoster(posterObj)

    })
    .catch(err=> console.log(err))
}

const dayCounter = (evt)=>{
    console.log(evt)
    axios.put("http://localhost:4000/api/counter")
        .then(() =>{
            let counter = document.querySelector(`.counter`);
            counter.innerHTML= count
        })
        .catch(err=> console.log(err))
}




fortuneBtn.addEventListener(`click`, getFortune)
complimentBtn.addEventListener('click', getCompliment)
mtvtBtn.addEventListener(`click` , getMotivated)
addPosterBtn.addEventListener(`submit`, addPoster)
minusBtn.addEventListener(`click`, dayCounter)
plusBtn.addEventListener(`click`, dayCounter)