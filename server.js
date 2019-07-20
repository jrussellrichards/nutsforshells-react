const express = require('express');
const app = express();
var mysql      = require('mysql');
const port = process.env.PORT || 5000;

var connection = mysql.createConnection({
  host     : 'ftp.museonaturalia.cl',
  user     : 'museonat_javier',
  password : 'javier123.',
  database : 'museonat_shells'

});
connection.connect(); 

  
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('GET request to the HOME');
});

app.get('/eliminado/:id', function (req, res) {
  connection.query('delete from shell where id='+req.params.id, function(err, rows, fields) {
  
    res.send('eliminado'+req.params.id);
  });

});
// app.post('/eliminado', function (req, res) {
//   console.log(req.data)
//   for (const prop in req.data) {
//     console.log(prop);
//   }

//   console.log('holass')
// });
// create a GET route
app.get('/express', (req, res) => {
  // res.send({ saludo: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  connection.query('select * from shell', function(err, rows, fields) {
  
    res.send(rows);
    // console.log(rows)
    console.log('hola')
  });




});

app.get('/test/:id', (req, res) => {
  // res.send({ saludo: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  connection.query('select * from shell where id='+req.params.id, function(err, rows, fields) {
  
    res.send(rows);
    // console.log(rows)
  });
});
 