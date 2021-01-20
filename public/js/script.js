document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('#form'); //поиск с помощью якоря # из *.pug
    const btn = document.querySelector('.btn'); //поиск с помощью класса из *.pug


    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let data = {};
        const elements = [...form.elements];
        for (let el of elements) {              // for...of
            if (el.type !== 'submit') {
                data[el.name] = el.value;
            }
        }
        console.log(data);
        // console.log(JSON.stringify(data));
        fetch('/createUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            form.insertAdjacentHTML('beforeend', `<p class="alert alert-success">Inserted</p>`);         //!!!ОШИБКА!!!: НЕ ВЫВОДИТ
        })
    });


    

    // fetch('/ololo') //с помощью get или post app.*** добавить

})