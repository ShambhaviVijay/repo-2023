let list= document.getElementById('list')

let a = [
    "Initializing hack tool..." , 
    "Opening Instagram..." ,
    "Connecting to server...",
    "Connection failed...",
    "Trying to reconnect...",
    "200 passwords tried...",
    "Failed...",
    "Trying again...",
    "Connection successfull...",
    "Username _sjksjk..." , 
    "Trying to get data...",
    "236 id found...",
    "Saving data on local desktop...",
    "Hack successfull!"
]

const sleep = (seconds) =>{
    return new Promise(( resolve , reject)=>{
     
        setTimeout(()=>{resolve(true)}, seconds * 3000)
    })
}

const showHack =  async (message)=>{
   await sleep(3)
    document.write(message)
    console.log(message)
}

(async ()=>{
   for(let i=0; a.length; i++){
   await showHack(a[i])
   }
})()