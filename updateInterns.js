const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("nafiuadegbite");
  const query = { movie: "The Banker" };
  const newvalues = { $set: { movie: "Parasite", year: "2019", rating: 8.6 } };
  dbo.collection("myMovies").updateOne(query, newvalues, function (err, res) {
    if (err) throw err;
    console.log(
      `${res.matchedCount} document(s) matched the query criteria.`
    );
    console.log(`${res.modifiedCount} document(s) was/were updated.`);
    db.close();
  });
});
