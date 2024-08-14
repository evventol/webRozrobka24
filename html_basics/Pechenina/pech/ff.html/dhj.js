document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє стандартну відпраку форми
    alert('Форма була надіслана');
});

let input = document.getElementById('name');
input.addEventListener('focus', function(event) {input.style.backgroundColor="blue";
    console.log('Текстове none у фоусі');
    
});

input.addEventListener('blur', function(event) {input.style.backgroundColor="white"
console.log('Текстове none втратило фокус');
})

input.addEventListener('mouseout', function(event) {input.style.backgroundColor="";
    console.log('Текстове none у фоусі');
})

input.addEventListener('mouseover', function(event) {input.style.backgroundColor="green";
    console.log('Текстове none у фоусі');
})
// mouseout
//mouseover