/**----------------------------
 * Mongodb Connection
 * ----------------------------
 * 1. Create account
 * 2. create an user with password
 * 3. whitelist IP adress
 * 4. database > connect > driver > node > View all code
 * 5. change the password the uri
 * --------------------------------
 * ##server side
 * 1. CREATE ----- POST
 * 2. app.post('/users'/ async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const resuslt = await userCollection.insertOne(user);
 * 7. res.send(result)
 * 
 * ------------------------------------
 * 
 * ## Client
 * 
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type' : 'application/json'}
 * 5. add body: JSON.Stringify(users)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * -----------------------------------------
 * 
 * READ MAny
 * 
 * 
 * -----------------------------------------
 *  ## server
 * 1.  create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * 
 * 
 * ---------------------------------------
 * 
 * DELETE
 * 
 * ----------------------------------------
 * 
 * ### Server
 * 
 * 1. create app.delete('/user/:id', async(req,res) => {})
 * 2. specify unique ObjectId to deleted the right user
 * 3. const query = {_id: new ObjectID(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 
 * 
 * 
 * ## Client
 * 
 * 1. Create dynamic url 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */