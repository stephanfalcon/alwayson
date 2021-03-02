const axios = require("axios")
const Time = require("./time")

const fourMinFiftyNineSec = 1000*60*5-10000
const url = "https://note-taker-api.glitch.me/"


const interval = () => {
    setInterval(()=>{
        ping()
    },5000)
}

const ping = () => {
    let time = new Time()
    axios.get("https://note-taker-api.glitch.me/")
    .then((data)=>{console.log(`request to ${url} at ${time.values.time}: ${data.data}`)})
}

interval()