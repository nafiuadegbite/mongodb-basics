const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("nafiuadegbite");
  const myobj = [
    { movie: "The Banker", year: "2020", rating: 8 },
    { movie: "Bad Boys", year: "2020", rating: 7 },
    { movie: "The Hunt", year: "2020", rating: 7 },
    { movie: "Bloodshot", year: "2020", rating: 7.5 },
    { movie: "First Cow", year: "2020", rating: 6.5 }
  ];
  dbo.collection("myMovies").insertMany(myobj, function (err, res) {
    assert.equal(err, null);
    assert.equal(5, res.ops.length);
    console.log("Number of documents inserted: " + res.insertedCount);
    console.log(res);
    db.close();
  });
});
