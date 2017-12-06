var express    = require('express');
var bodyParser = require('body-parser');
var request    = require('request-promise');
var mysql      = require('mysql');

var databaseModule = require('./static/js/databaseModule.js');

var port       = 3000;

var app        = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname+'/static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));

databaseModule.createDataBase(mysql);

//Database mysql
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '25ser1987r',
    database: 'coin_keeper'
});

//Authorization block 
app.post('/login', jsonParser, function (req, res) {

    connection.query('SELECT * FROM users  WHERE login = ?', [req.body.login], function (err, rows, fields) {
        
        if (err) throw err;
        
        if (rows[0] !== undefined) {
            
            if (rows[0].password === req.body.password) {
 
                connection.query(databaseModule.requestTextForAuthorization(), [rows[0].iduser], function (err, profitsrows) {
                   
                   if (err) throw err; 
                   res.status(200).json({name: rows[0].name, 
                                 surname: rows[0].sname, 
                                 iduser: rows[0].iduser,
                                 expenses : profitsrows }).end();
                });
                     
            } else {
                res.status(200).json(`${'Error in password'}`).end();
            }
        } else {
            res.status(200).json(`${'Error in login'}`).end();
        }
    });
});

//Registration block
app.post('/register', function (req, res) {
    connection.query('SELECT * FROM users  WHERE login = ?', req.body.login, function (err, rows) {
        if (err) throw err;
        if (rows[0] !== undefined) {
            res.status(200).send("Choose another login!");
        } else {
            connection.query('INSERT INTO users SET ?', req.body,
                function (err, result) {
                    if (err) throw err;
                    res.status(200).send(req.body).end();
                }
            );
        }
    });
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log('Server start on port '+port+'!');
});