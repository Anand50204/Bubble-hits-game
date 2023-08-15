var timmer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
function mackBuble(){
    var clter = "";
for(var i = 1; i <= 160; i++){
    var rn = Math.floor(Math.random()*15);
    clter+=`<div class = "buble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML=clter;
}
function runTimmer(){
   var closetimer = setInterval(function() {
        if(timmer>0){
            timmer--;
            document.querySelector("#time").textContent=timmer;
        }else{
            clearInterval(closetimer);
            var a = document.querySelector(".pbtm").innerHTML= `<h1>game Over</h1>`;
    
        }
        
    }, 1000);
}
function gateNewHits(){
     hitrn = Math.floor(Math.random()*15);
    document.querySelector("#hits").textContent=hitrn;
}
var pbtm = document.querySelector(".pbtm");
pbtm.addEventListener("click", function(e){
   var clickdnum = Number((e.target.textContent));
   if(hitrn == clickdnum){
    increaseScore();
    gateNewHits();
    mackBuble();
   }
})
gateNewHits();
runTimmer();
mackBuble();