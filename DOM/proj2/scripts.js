//grab element
const red=document.querySelector(".red");
const cyan =document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");
//there are five class so we use five here

//center for center class
const center=document.querySelector(".center");
//grab the element we use window
console.log(window.getComputedStyle(red));
//here red is property
//all css style
console.log(window.getComputedStyle(red).background);
//it show all background color padding line etc 
console.log(window.getComputedStyle(red).backgroundColor);
// give the only color



//we use it with using of function like

const getBGColor=(SelectedElement)=>{
     return window.getComputedStyle(SelectedElement).backgroundColor;
}
console.log(getBGColor(red));

//eventelistner//
var orangeElementColor=getBGColor(orange);
//i want store the value not to console upper result
orange.addEventListener("mouseenter",()=>{
     center.style.background=orangeElementColor;
});

//event listener using method 
//method actually help us to call all other element
//variable function (jar uopr reaction hobe ,ki reaction hobe);
const magicColor=(element,color)=>{
return element.addEventListener("mouseenter",()=>{
 center.style.background=color;
});
}
magicColor(red,BGColor(red));
magicColor(cyan,BGColor(cyan));
magicColor(violet,BGColor(violet));
magicColor(orange,BGColor(orange));
magicColor(pink,BGColor(pink));
