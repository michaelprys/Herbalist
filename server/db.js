import { MongoClient } from 'mongodb';

const URL = 'mongodb://127.0.0.1:27017';
const dbName = 'recipes_db';

let client;
let db;

export const connectToDb = async () => {
    try {
        client = new MongoClient(URL);
        await client.connect();
        db = client.db(dbName);
        console.log(`Connected to ${dbName}`);
    } catch (err) {
        console.error(`Error connecting to ${dbName}`, err);
    }
};

export const getDb = () => {
    if (db) {
        return db;
    } else {
        console.error('Database client is not connected');
        return null;
    }
};
