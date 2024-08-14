document.getElementById('faf').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Forma nadislana')
})
let input = document.getElementById('name1');
input.addEventListener('focus', function(){
    input.style.color = "blue" 
    console.log('Focys est')
});
input.addEventListener('blur', function(){
    input.style.color = "black"
    console.log('Focys nety')
});