const express = require('express');
const app = express();
const cors = require('cors');


const mysql = require('mysql2');
const { response } = require('express');
app.use(cors());

const bodyParser = require('body-parser');

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'manoj',
    password: 'cdac',
    database: 'parbhani',
	port:3306
});




app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;

app.get('/read', function (req, res){
    const {bookid} =req.body
    const statement = `select * from book where bokid = ?`

    connection.query (statement, [bookid], (erro,res) => {
        if (error) {
            res.send(error)
        }
        else{
            res.send(res)
        }
    })
});

app.get('/update', function(req, res){

    const {bookid, price} = req.body
    const statement = `update book set price= ? where bok id = ?`

    connection.query (statement, [price, bookid], (error,res) =>{
        if(error){
            res.send(error)
        }
        else{
            res.send(res)
        }
    })
})

app.listen(8081, function(){
    console.log("server listning at port 8081...");
});