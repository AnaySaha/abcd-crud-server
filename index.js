const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();
//  mongodb user and pass
// user: anaysahapaban
// anaysahapaban
// pass: glHHhxhsA0iCvjss
// 3Ch3JstCZHblnrBP
app.use(cors());
app.use(express.json());





const uri = "mongodb+srv://anaysahapaban:3Ch3JstCZHblnrBP@cluster1.16iph.mongodb.net/?appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    app.get('/users', async(req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/users/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const user = await userCollection.findOne(query);
      res.send(user);
    })

    app.post('/user', async(req, res) => {
      const user = req.body;
      console.log('new user', user);

      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.put('/users/:id', async(req,res) =>{
      const id = req.params.id;
      const updateUser = req.body;
      console.log(id, updateUser);
      const filter = { _id: new ObjectId (id) };
      const option = {upsert: true}
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email
        }
      }
      const result = await userCollection.updateOne(filter, updateUser, options)
      res.send(result);
    })

    app.delete('/user/:id', async(req, res) =>{
      const id = req.params.id;
      console.log('please delete from database', id)
      const query = { _id: new ObjectId (id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);


    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) =>{
    res.send('SIMPLE CRUD IS RUNNING')
})
app.listen(port,() =>{
    console.log(`SIMPLE CRUD IS RUNNING ON PORT : ${port}`)
})

