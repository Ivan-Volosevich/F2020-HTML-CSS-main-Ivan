const express = require('express'); // ЗАПУСК: "node app"
const app = express();
const { Client } = require('pg');
const bodyParser = require('body-parser');
const { get } = require('browser-sync');


const client = new Client({
 connectionString: 'postgres://egsjjxkhdolcat:39a917b7726167cc28cd897518fc10a2f860fe7366a4af7f634bf09f349b4239@ec2-52-208-138-246.eu-west-1.compute.amazonaws.com:5432/deis0sip1foj27',
 ssl: { rejectUnauthorized: false }
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected');
    //   client.query(`SELECT * FROM Persons`,                                // "*" - означает ALL
    //                 // VALUES ('john', 'Doe');`,
    //                 (err, res) => {
    //                     if (err) {
    //                          console.log(err)
    //                     } else {
    //                         console.log(res);
    //                     }

    //                 }
    //     )
    }
});

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));         //функции промежуточной обработки | middle where
app.use(bodyParser.json());                             // { extended: true }

app.get('/', function(req, res) {     // require - запрос; response - ответ
    res.send('Hello');
});

app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/userlist', function (req, res) {
    client.query('SELECT * FROM Persons', function(err, response) {
        if (err) {
            res.send('Error!');
        } else {
            res.render('index', { title: 'WowMan', users: response.rows});
        }
    })
});

app.get('/adduser', function(req, res) {
    res.render('addUser');  //тут addUser = наш шаблон *.pug
});

app.post('/createUser', function(req, res) {
    if (req.body.firstname.length < 1 || req.body.lastname.length < 1) {        // пустая строка - это False = !****
        return res.status(400).send({error: 'Firstname or Lastname is empty'});
    };
    client.query(`INSERT
                  INTO Persons (firstname, lastname)
                  VALUES ('${req.body.firstname}', '${req.body.lastname}')`, (err, result) => {
                      if (err) {
                          res.status(500).json({ error: err.stack})
                      } else {
                          res.status(200).json({ response: result})
                      }
    });
});

app.listen(3000, function() {
    console.log('success');
});


app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res) {

    client.query(`SELECT * FROM Users`,
     function(err, response) {
        if (err) {
            res.send('Error!');
        } else {
            res.send(JSON.stringify(response));
        }
    })

    // res.send(Object.assign(req.body, {server: 'express'}));      //временно комментируем

    //uuid4;
    //res.cookies();
    //...;
    //res.redirect('./admin);
});

//генерация token в node.js: uuid4 - через базу данных берём #id пользователя и set'аем tokes на требуемый #id
//lifeTime - удаление старого token