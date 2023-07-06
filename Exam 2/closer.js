function init(){
    var firstName="kartik";
    console.log("hello i am kartik");
    //inside the function another function is here
    function sayFirstName(){
        console.log(firstName);
    }
   return sayFirstName;
   //we did not call this function we just use this refference

}
//we just use the refference of sayfirst name so the refference is here 
//not gone trrough the memory also the init function

init(); //hello i am kartik only
//it does not print any value;
var value=init();
value();


//another classic example//
function doAddition(x){
    return function(y){
        return x+y;
    }
}
var adds=doAddition(4);
console.log(adds(5));   //9

//it also print
console.log(doAddition(5)(5));
//cause the doAddition refference not gone anywhere
//if we have one refference we can do this
