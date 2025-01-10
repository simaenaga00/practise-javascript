function ClickCounterGame(){
    let count = 0;//countという変数を準備して０を代入する
    const gameContainer = document.getElementById("game-container");

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";

    let counter = document.createElement("p");
    counter.textContent = count;

        button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    gameContainer.appendChild(button1);
    gameContainer.appendChild(counter);
}
ClickCounterGame();//関数の呼び出し命令だよ
//funchon CCG()←これが関数名{

//}
//index.html → main.js