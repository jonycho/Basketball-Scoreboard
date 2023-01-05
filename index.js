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
        homeResult.style.boxShadow = "0px 0px 5px #FFC400"
    }else if(countGuest>countHome){
        guestResult.style.boxShadow = "0px 0px 5px #FFC400"
    }else{
        homeResult.style.boxShadow = "0px 0px 0px #FFC400"
        guestResult.style.boxShadow = "0px 0px 0px #FFC400"
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