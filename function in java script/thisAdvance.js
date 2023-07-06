//console.log(this);      //{} return the empty value
//but browser it say window;
var user={
    firstName:"kartik",
    courseCount:4,
    //method
    getCourseCount:function(){
        console.log("line 7",this);
    }
    //in regular function and regualar function call
    function sayHello(){
        console.log("hello");
        console.log("line 10,"this);
    }
}
user.getCourseCount();
//retrun this entire value;

//regular function call 
sayHello();