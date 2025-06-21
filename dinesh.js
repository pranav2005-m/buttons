let..... rand=Math.random()
let computerMove;
if(rand>=0 && rand<1/3){
    computerMove="Rock";
}
else if(rand>=1/3 && rand <2/3){
    computerMove="PAPER";

}
else{
    computerMove="SECISSORS";
}
console.log(computerMove)