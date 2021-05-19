import { Db, MongoClient } from 'mongodb';
import config from './config';

let db: Db;

async function initializeClient(): Promise<Db> {
  const client = await MongoClient.connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  });

  return client.db('database');
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};