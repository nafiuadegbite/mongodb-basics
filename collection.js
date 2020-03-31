const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "nafiuadegbite";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db(dbName);
  dbo.createCollection("intern", (err, result) => {
    if (err) throw err;
    console.log("Interns collection created");
    db.close();
  });
});
