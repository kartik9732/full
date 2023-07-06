function init(){
    var firstName="kartik";
    //inside the function another function is here
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}
init();
//first init call next inside the function sayfirstName call;
//but after the init function call firstName not exit
