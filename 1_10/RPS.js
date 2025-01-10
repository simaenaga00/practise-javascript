function RPS(){
    const choices = ["gu","choki","pa"];
    let handImage = ""
    
    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choicebotton = document.createElement("button")
    choicebotton.textContent = "決定"

    gameContainer.appendChild(choicebotton);

    
    let image = document.createElement("img");
    image.alt = "Choise";
    image.style.width = "150px";
    image.style.height = "150px";

    
    let enemyImage = document.createElement("img");
    enemyImage.alt = "Choice";
    enemyImage.style.width = "150px";
    enemyImage.style.height = "150px";

    choicebotton.addEventListener("click",function(){
        switch(select.value){
            case"gu":
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png"
                break;
           case"choki":
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s800/janken_choki.png"
                break;
           case"pa":
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s800/janken_pa.png"
                break;
           default:
                break
        }
        let enemyHand = choices[Math.floor(math.random() * choices.length)];
        switch(enemyHand){
            case"gu":
                enemyImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png"
                break;
           case"choki":
                enemyImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s800/janken_choki.png"
                break;
           case"pa":
                enemyImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s800/janken_pa.png"
                break;
           default:
                break
        }
    })
    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyImage);

}