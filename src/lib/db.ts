import mongoose from "mongoose";

type connectionType = {
  isConnected: mongoose.ConnectionStates | null;
};

const connection: connectionType = {
  isConnected: null,
};

export const connectToDB = async () => {
  try {
    if (connection.isConnected != null) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL || "");
    connection.isConnected = db.connections[0].readyState;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to connect to DB!");
  }
};
