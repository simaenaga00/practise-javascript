function RPS(){
    const choices = ["gu","choki","pa","muteki","🖕"];

    // let select = document.createElement("select");
    // let option1 = document.createElement("option")
    // let option2 = document.createElement("option")
    // let option3 = document.createElement("option")
    // const gu = "gu"
    // option.value = gu;
    // option.textContent = gu;
    // select.appendChild(option1);
    // option.value = choki;
    // option.textContent = choki;
    // select.appendChild(option2);
    // option.value = pa;
    // option.textContent = pa;
    // select.appendChild(option3);
    // gameContainer.appendChild(select);
    
    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement('img');
    image.alt = 'Choise';
    image.style.width = "150px";
    image.style.height = "150px";
    image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";

    gameContainer.appendChild(image);


    //forEach 配列など複数のデータがあるもので使える。全部やる関数。
    //配列.forEach(配列の中身　=> {命令})
}