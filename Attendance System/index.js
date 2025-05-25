const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.set('view engine', 'ejs');
//middlewarres
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
const sendEmail = require('./public/js/mailer');
app.use(express.json());
//sql-connection
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '00000000',
  database: 'attendance',
});
//Routes
app.get('/', (req, res) => {
  res.render('home.ejs')
});


app.post('/data', async (req, res) => {
  let pArray = [];
  let aArray = [];
  let checkArr = req.body;
  for (object of checkArr) {
    if (object.status == 'present') {
      pArray.push(object)

    } else {
      aArray.push(object)

    }
  }

  try {
    await sendEmail(pArray, aArray);
  } catch (err) {
    return res.status(500).send('Failed to send email');
  }

  const date = new Date().toLocaleDateString('en-GB'); 


  for (let data of pArray) {
    let query = `INSERT INTO record (gmail, status, time) VALUES (?, ?, ?)`;
    let values = [data.gmail, data.status, date];
    connection.query(query, values, (err, result) => {
      if (err) throw err;
    });
  }

  for (let data of aArray) {
    let query = `INSERT INTO record (gmail, status, time) VALUES (?, ?, ?)`;
    let values = [data.gmail, data.status, date];
    connection.query(query, values, (err, result) => {
      if (err) throw err;
    });
  }
  console.log("DONE");
  res.status(200).json({ redirect: '/student' });

})

app.get('/student', (req, res) => {
  res.send('Mails Sent Succesfully');
});


app.listen(port, () => {
  console.log('App listening on port');
});