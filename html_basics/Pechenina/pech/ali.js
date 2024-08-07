var myName ="Kamila";
let age = 15;
const pi = 3.14;
console.log("hello")
console.log(myName);
console.log(age+pi);
let tablet ={
    model:"S9 FE",
    color:"wight",
    size: 20,
    price: 18000,

};
console.log(tablet);
console.log(tablet.model);
console.log(tablet.color);
console.log(tablet.size);
console.log(tablet.price);
   const ages=[18,21,24,19];
   let x=ages[2];
   console.log(ages,x)

   let score=18;

   if (score >= 18) {
    console.log("Добре");


   } else {
    console.log("Ваш вік не дозволяє відвідувати цю сторінку");
   }

   const userlnput=prompt("Enter your name:","");
   if (userlnput.length >0) {
    alert(userlnput);
   } else{
    alert("No name");
   }