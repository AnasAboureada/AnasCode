import mongoose, { Mongoose } from 'mongoose';

interface IConnection {
  isConnected?: number;
}

const connection: IConnection = {};

async function dbConnect(): Promise<void> {
  // If we have a connection to MongoDB
  if (connection.isConnected) {
    return;
  }

  const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error('No MongoDB connection string available on environment variable');
  }

  // Connect to MongoDB
  try {
    const db: Mongoose = await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

    connection.isConnected = db.connections[0].readyState;

    mongoose.set('debug', (collectionName, method, query, doc) => {
      console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
    });

    console.log('Connected to MongoDB');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    }
    throw new Error('Failed to connect to MongoDB');
  }
}

export default dbConnect;
