const gameSelector = document.getElementById('game-selector');
const gameContainer = document.getElementById('game-container');

gameContainer.textContent="ゲームを選ぶとここに表示されます"

gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML = "";
    switch(gameSelector.value){
        case "none":
            none()   
            break;
        case "click-counter":
            ClickCounterGame();    
            break;
        case "number-guess":
            NumberGuess();
            break;
    }
})
function none(){
gameContainer.textContent="ゲームを選ぶとここに表示されます"
}

function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    let message = document.createElement("p");
    let imput = document.createElement("input");
    input.type = "namber";
    input.max = 100;
    input.tmin= 1;
    input.type = "namber";
    let button = document.createElement("button");
    massage.textContent = "文字"

    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(massage);
}

function ClickCounterGame(){

    let count = 0;

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";

    let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";

    let button3 = document.createElement("button");
    button3.textContent = "+100ボタン";

    let counter = document.createElement("p");
    counter.textContent = count;

        button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

        button2.addEventListener("click",function(){
        count=count+10;
        counter.textContent = count;
    })
    button3.addEventListener("click",function(){
        count=count+100;
        counter.textContent = count;
    })

    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(counter);
}


