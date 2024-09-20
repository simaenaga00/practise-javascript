document.getElementById("white").style.color = "white";
function changeColor(){
document.getElementById("text").style.color = "red";
document.getElementById("white").style.color = "black";
}

//document.getElementByID("text").style.color = "red";
/* これは、ドキュメントの中の「text」*/
let count = 0;
function increaseCount(){
    count++;
    document.getElementById("counter").innerText=count;
}
function herasuCount(){
    count--;
    document.getElementById("counter").innerText=count;
}