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
      client.query(`INSERT INTO Persons (lastname, firstname)
                    VALUES ('john', 'Doe');`;                                // "*" - означает ALL
                    (err, res) => {
                        if (err) {
                             console.log(err)
                        } else {
                            console.log(res);
                        }

                    }
        )
    }
})

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.send('Hello');
});

app.listen(3000, function() {
    console.log('success');
});
