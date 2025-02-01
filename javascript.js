function getcmpchoice() {
    let a = Math.floor(Math.random() * 100);
    return a % 3;
}
let human_score = 0;
let computer_score = 0;
let round = 0;

function playgame(choice, c) {
    let msg;
    if (c == 0) {
        if (c == 0 && choice == "scissors") {
            computer_score++;
            msg = "You lose, rock beats scissors";
        }
        else if (c == 0 && choice == "paper") {
            human_score++;
            msg = "You won, paper beats rock";
        }
        else {
            msg = "Draw";
        }
    }
    if (c == 1) {
        if (c == 1 && choice == "rock") {
            computer_score++;
            msg = "You lose, paper beats rock";
        }
        else if (c == 1 && choice == "scissors") {
            human_score++;
            msg = "You won, scissors beats rock ";
        }
        else {
            msg = "Draw";
        }
    }
    if (c == 2) {
        if (c == 2 && choice == "paper") {
            computer_score++;
            msg = "You lose, scissors beats paper";
        }
        else if (c == 2 && choice == "rock") {
            human_score++;
            msg = "You won, rock beats scissors";
        }
        else {
            msg = "Draw";
        }
    }

    roun.textContent = "Round : " + round + " " + msg;
    res.appendChild(roun);
    comp.textContent = "Computer Score is : " + computer_score;
    human.textContent = "Human Score is : " + human_score;
    res.appendChild(comp);
    res.appendChild(human);
    if (computer_score == 5) {
        alert("You Lost");
        return;
    }
    if (human_score == 5) {
        alert("You Won");
        return;
    }
}



let flag = 0;
let i = 0;
let r = document.querySelector('#r');
let p = document.querySelector('#p');
let s = document.querySelector('#s');
let pl = document.querySelector('#pl');

i++;

let choice;


r.onclick = (event) => {
    console.log("r");
    choice = "rock";
    let c = getcmpchoice();
    playgame(choice, c);

};

p.onclick = (event) => {
    console.log("p");
    choice = "paper";
    let c = getcmpchoice();
    playgame(choice, c);
};

s.onclick = (event) => {
    console.log("s");
    choice = "scissors";
    let c = getcmpchoice();
    playgame(choice, c);
};

const res = document.querySelector("#res");
const comp = document.createElement("comp");
comp.classList.add("comp");
const human = document.createElement("human");
human.classList.add("human");
comp.style.color = "red";
human.style.color = "blue";
const roun = document.createElement("roun");
roun.classList.add("roun");
roun.style.color = "white";


pl.onclick = (event) => {
    computer_score = 0;
    human_score = 0;
    comp.textContent = "Computer Score is :" + computer_score;
    human.textContent = "Human Score is :" + human_score;
    roun.textContent = "Round :" + round;
    res.appendChild(roun);
    res.appendChild(comp);
    res.appendChild(human);
}