//normal function
let score=45;
//global varriable
function addBonus(){
    score=score+45;
    return score;
}
//functional programming approach
//where function and score totally distict
//easy to debug
//do not depent on global varriable;
function addBonus(score){
return score+45;
