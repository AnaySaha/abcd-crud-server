const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://anaysahapaban:gmaABapUt11D4YFF@cluster0.mongodb.net/mydb?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Connection error:", error);
    } finally {
        await client.close();
    }
}

run();