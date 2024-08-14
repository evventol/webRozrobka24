document.getElementById("form").addEventListener("submit",function(event) {
    event.preventDefault();
    alert("Forma nadislana")
});

document.getElementById("name").addEventListener("focus",function() {
    console.log("Pole focus")
});

document.getElementById("password").addEventListener("blur",function() {
    console.log("polell")
});

let submit = document.getElementById("name") 
    submit.addEventListener("focus",function() {
    submit.style.color= "red"
    });

    submit.addEventListener("blur",function() {
    submit.style.color= "black"
    });