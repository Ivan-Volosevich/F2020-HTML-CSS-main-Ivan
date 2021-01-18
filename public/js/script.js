document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('#form'); //поиск с помощью якоря # из *.pug
    const btn = document.querySelector('.btn'); //поиск с помощью класса из *.pug

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(form.elements);
    });

    fetch('/ololo') //с помощью get или post app.*** добавить

})