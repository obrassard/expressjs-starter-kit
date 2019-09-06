import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { SampleController } from './controllers/SampleController';

dotenv.config();

// Get .env variable 
// let var = process.env.VAR_NAME;

// Define app port
const app_port = process.env.PORT || 1234

// Initialize express
const app = express();
app.use(express.static('public'));

// Config view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.set('twig options', { 
    strict_variables: false
});

// Config bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//// ROUTES ///////////////////////////////////////////////////

// Home GET
app.get('/', function(req, res){
    res.render('index', {
        welcomeMessage : "Hello World !"
    });
});

// POST
app.post('/', function(req, res){
    let requestContent = req.body;
});

// Return JSON
app.get('/json', function(req, res){
    res.send({
        property: "value"
    });
});

// Send with status
app.get('/forbidden', function(req, res){
    res.status(403).send('403 Forbidden');
});

// Use controller
app.get('/user/:id', function(req, res){
    SampleController.GetUser(req, res);
});


///////////////////////////////////////////////////////

app.listen(app_port);
console.log(`Listening on port http://localhost:${app_port}`)