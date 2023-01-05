let homeResult = document.getElementById("home-result")
let guestResult = document.getElementById("guest-result")

let countHome = 0
let countGuest = 0

function addPoints(point,team){
    if(team ==="home"){
        countHome +=point    
        homeResult.textContent = countHome        
    }else if(team === "guest"){
        countGuest +=point    
        guestResult.textContent = countGuest
    }
    if(countHome>countGuest){
         homeResult.classList.add("shadow")
        guestResult.classList.remove("shadow")
    }else if(countGuest>countHome){
        
        guestResult.classList.add("shadow")
        homeResult.classList.remove("shadow")
        
    }else{
        guestResult.classList.remove("shadow")
        homeResult.classList.remove("shadow")
        
    }
}

function newGame(){
    countGuest=0
    countHome=0
    homeResult.textContent = countHome
    guestResult.textContent = countGuest
    homeResult.style.boxShadow = "0px 0px 0px #FFC400"
    guestResult.style.boxShadow = "0px 0px 0px #FFC400"
}
