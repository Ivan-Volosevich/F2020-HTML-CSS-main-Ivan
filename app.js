const express = require('express'); // ЗАПУСК: "node app"
const app = express();
const { Client } = require('pg');

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
})

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
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

app.listen(3000, function() {
    console.log('success');
});