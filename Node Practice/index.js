import express from "express";
import { MongoClient } from "mongodb";


const app = express();

const dbName="student";
const url="mongodb://localhost:27017";  // the url of mongodb

const client=new MongoClient(url);


async function dbConnect(){
    await client.connect();
   const db=client.db(dbName); //“From the MongoDB server  connected to, open the database named 'student'.”
   const collection = db.collection('sakib');  //Inside student database, open the sakib collection.


   const result = await collection.find().toArray();
   console.log(result);

}


dbConnect();

app.listen(3200);

