document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('#form'); //поиск с помощью якоря # из *.pug
    const btn = document.querySelector('.btn'); //поиск с помощью класса из *.pug
    const statusContainer = document.querySelector('.status'); //либо getElementsByClassName('status'); - но для массива


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
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            statusContainer.innerHTML = '';
            return Promise.all([response.ok, response.json()]);
        })
        .then((data) => {
            console.log(data);
            if (!data[0]) {
                throw Error(data[1].error);
            }
            statusContainer.insertAdjacentHTML('beforeend', `<p class="alert alert-success">Inserted</p>`);
            setTimeout(() => {
                statusContainer.innerHTML = '';
            }, 3000);
        }).catch((error) => {
            console.log(error);
            statusContainer.insertAdjacentHTML('beforeend', `<p class="alert alert-danger">${error}</p>`);
            setTimeout(() => {
                statusContainer.innerHTML = '';
            }, 3000);
        })
    });


    

});