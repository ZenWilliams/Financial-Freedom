import express from 'express';
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const connectionString = 'mongodb+srv://admin-williams:wk1970Qc@cluster0.3eany.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

MongoClient.connect( connectionString,
    { useUnifiedTopology: true }
        , (err, client) => {
            if (err) return console.log(err)
            console.log('Connected to Database')
            const db = client.db('financial_freedom')
            const users = db.collection('users')

            app.get('/getUser', (req, res)=>{
                res.send('Hello World')
            })
            
            app.post('/createUser', (req, res)=> {
                users.insertOne(req.body)
                    .then(result => {console.log(result)})
                        .catch(error => console.log(error));
                        res.send(req.body);
            })
            
            app.delete('/deleteUser', (req, res)=>{
            
            })
});





app.listen(3000, ()=> {
    console.log('listening on 3000')
})