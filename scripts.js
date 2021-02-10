// ПРОГНОЗ ПОГОДЫ
const weather1 = [
    {
        "name": "Minsk",
        "country": "Belarus",
        
    },
];





//                         // document.addEventListener('DOMContentLoaded', function(){
//                         // });

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//   .then(response => response.json())
//   .then(json => {
//     const items = json;
//     console.log(items);

//     const container = document.querySelector('.blog-item');

//     function renderPostPreview(title, body) {
//         return `<div class="blog__img">
//         <div>
//             <img src="./Images/Blog image.jpg" width="565" height="363" alt="Image">
//         </div>
//     </div>
//     <div class="blog__desc">
//         <div class="blog-content">
//             <h3>
//             ${title}
//             </h3>
//             <p>
//             ${body}
//             </p>
//               <div class="actions">
//                 <button class="button-blog button-hover button-blog">Read more</button>
//             </div>
//         </div>
//     </div>`
//     }

//     items.forEach(post => {
//         let preview = renderPostPreview(post.title, post.body);
//         container.insertAdjacentHTML('beforeend', preview);
//     });
//   });

//                     //   const arr = [1,2,4,5];

//                     //   function double(arr) {
//                     //       return arr.map((el) => {
//                     //         return el*2;
//                     //       })
//                     //   }

//                     //   console.log(double(arr));

// const button = document.querySelector('.svg-button');
// const input = document.querySelector('.search-input');

// button.addEventListener('click', function() {
//     document.querySelector('.search-input').classList.toggle('hide')
// });

// input.addEventListener('keyup', function(event) {
//     if (event.keyCode === 13) {
//     console.log(event.target.value);
//     }
// });








document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('#form'); //поиск с помощью якоря # из *.pug
    const btn = document.querySelector('.btn'); //поиск с помощью класса из *.pug
    const statusContainer = document.querySelector('.status'); //либо getElementsByClassName('status'); - но для массива

    const loginForm = document.querySelector('#login-form');
    const loginButton = document.querySelector('#login-btn');

    if (form) {
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
    }

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        let data = {};
        const elements = [...loginForm.elements];
        for (let el of elements) {              // библиотека axios
            if (el.type !== 'submit') {
                data[el.name] = el.value;
            }
        }
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((res) => console.log(res));

    });

    

});