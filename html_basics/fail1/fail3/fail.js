var myName = 'Egor';
let age = 15;
const pi = 3.14
console.log("hi");
console.log(myName);
console.log(age+pi);
let mouse={
    size:15,
    color:"black",
    name:"intl",
}
console.log(mouse.size);
let keyboard={
    size:40,
    color:"red",
    name:"intel",
}
console.log(keyboard.name)
let monitor={
    size:70,
    color:"black",
    name:"intel",
}
console.log(monitor.color);
const kids =[4,5,6,7];
console.log(kids)
let first=kids[2];
console.log(first);
let score = 16;
if(score >=18) {
    console.log("Відміно");
} else if(score >= 15){
    console.log("Добре");
}
// const userlput =prompt("ведіеь ваше ім'я:","");
// if (userlput.length > 0) {
//     alert(userlput)
// } else {
//     alert("No name");
// }
for (let i =0; i <10; i++) {
    console.log("це повідомленя буде показано 10 разів.");
}
let a = prompt( "nema","nema")
while (a==null||a.length===0){
    alert("no name" )
    a=prompt("nema","nema")
}
function sayhello(Sasha,age){
    console.log("Wsp,"+ age+" "+Sasha + "!");
}

sayhello("Egor","Age")
const button = document.getElementById("myButton");

button.addEventListener("click",function(){
alert("Buttonclicked!");
}) ;