const gameSelector = document.getElementById('game-selector');
const gameContainer = document.getElementById('game-container');

gameContainer.textContent="ゲームを選ぶとここに表示されます"

gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch(gameSelector.value){
        case "none":
            none()   
            break;
        case "Clickcounter":
            ClickCounterGame();
            break;
        case "Number-guess":
            NumberGuess();
            break;
        case "RPS":
            RPS();
            break;
    }
})
function none(){
gameContainer.textContent="ゲームを選ぶとここに表示されます"
}


