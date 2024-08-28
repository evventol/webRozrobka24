document.getElementById("item1").addEventListener("click", function(){
    alert("Я хочу з'їсти Діму.");
});

document.getElementById("item2").addEventListener("click", function(){
    alert("Ні, це мої сігари(");
});

document.getElementById("item3").addEventListener("click", function(){
    alert("ХЕХЕХЕХЕ ВІДБІЙ");
});

document.getElementById("item4").addEventListener("click", function(){
    alert("Я не продаюсь.");
});

document.getElementById("item5").addEventListener("click", function(){
    alert("Нарешті ЇЖА)))");
});

document.getElementById("item6").addEventListener("click", function(){
    alert("Ідіть в дупу>>");
});

document.getElementById("item7").addEventListener("click", function(){
    alert("Ура, я виспався.");
});

document.getElementById("item8").addEventListener("click", function(){
    alert("!Інтерв'ю зі мною, паном Віталієм)!");
});

document.querySelector(".drop").addEventListener("click", function(e) {
    e = event.target.closest(".drop-item").innerHTML;
    document.querySelector(".colors").innerHTML = e;
  });




const inputField= document.getElementById("counterInput");
const button = document.getElementById("buttonCircle");

button.addEventListener('click', ()=>
{
    let currentValue = parseInt(inputField.value);
    inputField.value = currentValue + 1;
    
});


const button2 = document.getElementById("buttonAboutMe");
button2.addEventListener("click", ()=>
{
    var colorDivs = document.getElementsByClassName("colDiv");
    for (var i = 0; i < colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = "#000000";
}
    // let colorC = document.getElementsByClassName('one');
    // colorC.style.backgroundColor = '#000000';
    //  colorC = document.getElementsByClassName('two');
    // colorC.style.backgroundColor = '#000000';
    //  colorC = document.getElementsByClassName('three');
    // colorC.style.backgroundColor = '#000000';
}
)