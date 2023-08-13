var timer = 60;
var hitrn = 0;
var score = 0;
const img = document.createElement("img");
img.src = "gameover.gif";
function increaseScore()
{
    score+=10;
    document.getElementById("scoreValue").textContent = score;
}
function getNewHit()
{
    hitrn = Math.floor(Math.random()*10);
    document.getElementById("hitval").textContent = hitrn;
}
function makeBubble()
{
    var cluster = "";
for(var i = 1;i<=126;i++)
{
    var num = Math.floor(Math.random()*10);
    cluster += `<div class="bubble">${num}</div>`;
}
document.querySelector("#pbtm").innerHTML = cluster;
}
function runTimer()
{
   var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = "";
            document.querySelector("#pbtm").appendChild(img);
            clearInterval(timerint);
        }
    } , 1000)

}
function increaseTimer()
{
    timer+=5;
    if(timer > 60) timer = 60;
}
document.querySelector("#pbtm").addEventListener("click" , function(dets){
   var clicked_num = Number(dets.target.textContent);
   if(clicked_num === hitrn)
   {
    increaseTimer();
    increaseScore();
    makeBubble();
    getNewHit();
   }
})

function shuru(){
document.querySelector("#start").addEventListener("click" , function(){
    runTimer();
    getNewHit();
})
}

makeBubble();
shuru();



