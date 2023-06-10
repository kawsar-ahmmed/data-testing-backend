const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001;
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');
app.get('/', (req, res) => {
    res.send('nodemon worked auto restart');
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01299999922' },
    { id: 2, name: 'sabnooks', email: 'sabnooks@gmail.com', phone: '01299999922' },
    { id: 3, name: 'srabonti', email: 'srabonti@gmail.com', phone: '01299999922' },
    { id: 4, name: 'suchuna', email: 'suchuna@gmail.com', phone: '01299999922' },
    { id: 5, name: 'kobori', email: 'kobori@gmail.com', phone: '01299999922' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '01299999922' },
    { id: 7, name: 'shakira', email: 'shakira@gmail.com', phone: '01299999922' },
    { id: 8, name: 'Anta', email: 'anta@gmail.com', phone: '08976677' },
];

// Database


const uri = "mongodb+srv://ridoy91221:LN3NQuV0OODo4mLf@cluster0.cze4qqj.mongodb.net/?retryWrites=true&w=majority";

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
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("MongoDb Connected");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}
run().catch(console.dir);


app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    console.log(user);
    users.push(user)
    res.send(user);
})

app.get('/', (req, res) => {
    res.send('nodemone is worked')
})

app.listen(port, () => {
    console.log('Listening', port);
})
