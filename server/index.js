const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
const cors = require("cors");
//const snowflake = require("snowflake-sdk");

var snowflake = require('snowflake-sdk');
var connection = snowflake.createConnection( {
    account: 'account.us-east-1',
    username: 'user name',
    password: 'password',
    warehouse: 'warehouse name',
    database: 'db name',
    schema: 'schema name',
    role: "role"
});

//confirm connection is working
connection.connect(
    function(err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message);
            }
        else {
            console.log('Successfully connected to Snowflake.');
            // Optional: store the connection ID.
            connection_ID = conn.getId();
            }
        }
    );


//app.get('/', (req, res)=> {
//    connection.execute({sqlText: "insert into mentor.cruddb_sd.movie_reviews (moviename, moviereview) values ('Inception', 'ok');"})
//    res.send('hello scott');
//});

app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.urlencoded({extended: true}));

app.post("/api/insert", (req, res)=> {

    const movieName = req.body.movieName;
    const movieReview = req.body.Review;

   // const sqlInsert = "insert into mentor.cruddb_sd.movie_reviews (moviename, moviereview) values (?, ?);";
   // connection.execute(sqlInsert, [movieName, movieReview], (err,result) => {
   //     console.log(err);
  //  connection.execute({sqlText:"insert into mentor.cruddb_sd.movie_reviews (moviename, moviereview) values ('ab','123');"})
   connection.execute({sqlText:'insert into mentor.cruddb_sd.movie_reviews (moviename, moviereview) values(?,?);', 
    binds: [movieName, movieReview] })
    });  

app.listen(3001, () => {
    console.log("running on port 3001");
});