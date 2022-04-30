import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const options = {}

const uri = process.env.MONGODB_URI

export const client = new MongoClient(uri, options);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    const db = client.db('Cluster0');
    return db;
  } catch (e) {
    console.log(e);
  }
}
