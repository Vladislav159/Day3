import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import users from './controller/user.js';
import posts from './controller/post.js';
import status from './controller/status.js';

const app = express();

await mongoose.connect('mongodb://localhost:27017/last_database');

//Nustatymas gauti duomenys x-www urlencoded formatu
app.use(express.urlencoded({
    extended: true
}));

//Nustatymas gauti duomenys JSON formatu
app.use(express.json());

//CORS apsaugos nuemimas
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
  }));

app.use(session({
    //Slaptos frazes nustatymas
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: false
    
  }));


app.get('/', (req, res) => {
    // Tikriname ar vartotojas yra prisijungęs, jeigu ne, grąžinsime statusą 401 ir žinutę: "Turinys prieinamas tik registruotiems varotojams"
    // Jeigu taip: Tuomet grąžinsime statusą 200 ir pasisveikinimo žinutę: "Labas Pasauli"
    if(req.session.loggedIn) {
        res.json('Sveikiname prisijungus');
    } else {
        res.status(401).json('Turinys prieinamas tik registruotiems vartotojams');
    }
});


app.use('/users', users);
app.use('/posts', posts);
app.use('/status', status)

app.use('/uploads', express.static('./uploads'));

app.listen(3000);

