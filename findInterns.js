const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("nafiuadegbite");
  const query = { rating: 7 };
  dbo.collection("myMovies").findOne({}, function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  dbo.collection("myMovies").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  dbo.collection("myMovies").find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
