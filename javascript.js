function getcmpchoice(){
    let a=Math.floor(Math.random()*100);
    return a%3;
}
let human_score=0;
let computer_score=0;

console.log("Play");
for(let i=0;i<5;i++){
    let c=getcmpchoice();
    
    let choice=prompt("enter your move");
    if(c==0&&choice=="scissors"){
        console.log("You lose, rock beats sissors");
        computer_score++;
    }
    if(c==0&&choice=="paper"){
        console.log("You win, paper beats rock");
    human_score++;}
     if(c==0&&choice=="paper"){
            console.log("draw");}
    if(c==1&&choice=="rock"){
         console.log("You win, paper beats rock");
         human_score++;}
     if(c==1&&choice=="scissors"){
        console.log("You lose, scissors beats paper");
        computer_score++;}
    if(c==1&&choice=="paper"){
        console.log("draw");}
    if(c==2&&choice=="scissors"){
        console.log("draw");
        }
    if(c==2&&choice=="paper"){
        console.log("You lose, scissors beats paper");
        computer_score++;}
    if(c==0&&choice=="rock"){
            console.log("You win, rock beats scissors");
            human_score++;}

}
if(human_score>computer_score)
console.log("you win");
else
console.log("You lose");

console.log("Your final score");
console.log(human_score);

console.log("computer score");
console.log(computer_score);