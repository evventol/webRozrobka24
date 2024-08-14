document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    alert('Форма була надіслана');
});
let input=document.getElementById('name');
input.addEventListener('focus',function(){
    console.log("Tap"); input.style.backgroundColor="red"
})
let leble=document.getElementById('email');
leble.addEventListener('focus',function(){
    console.log("Tap1");
     leble.style.backgroundColor="yellow";
})