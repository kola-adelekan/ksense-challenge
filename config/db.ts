import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI as string);

async function connectDB() {
    await client.connect();
    console.log("Connected to database");
}

const db = client.db("ksense-challenge");
const collection = db.collection("payloads");

export { connectDB, db, collection };
