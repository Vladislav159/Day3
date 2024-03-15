import express from 'express';
//Express karkaso iniciavimas
const app = express();

//NORINT PRIIMTI DUOMENYS URLENCODED FORMATU registruojama eilute
app.use(express.urlencoded({
    extended: true
}));

//Kelio registravimas (Route)
// CRUD:
//CREATE - POST
//READ - GET
//UPDATE - PUT 
//DELETE -DELETE

//Galimi metodai:
// .get ()- GET HTTP Metodas 
// .post ()- POST HTTP metodas 
// .put () - PUT HTTP metodas 
// .delete() -DLETETE HTTP metodas 


// PIrmas parametras :kelias (route) endpoint
//ANtras parametras :funkcija kuri bus issiaukiama vartotojui atejus nurodytu keliu
app.get('/', function (req, res) {
    //I funkcija perduodami parametrai : request(uzklausa) ir response(atsakymas)
    //Texto 'Hello World' grazinimas vartotojui(client)
    
  res.send('<h1>Title page Changes</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>Apie Mus</h1>')
} );
// Query parametru priemimas
app.get('/query', (req, res) => {
    //Query parametrai nugulia req.
    // console.log(req.query);
    res.send(`
        <li>Daina: ${req.query.song}</li>
    `)
});
//Post HTTP metodu perduodami duomenu priemimas
app.post('/post', (req, res) => {
    //req.body grazina body lygmenyje persiustus domenys
   console.log( req.body)
   if(req.body.song === 'Live forever') {
    console.log('Kondicija teigiama')
   }

   res.send(`
        <li>Filmas: ${req.body.movie ? req.body.movie : 'Nerasta'}</li>
        <li>Daina: ${req.body.song ? req.body.song : 'Nerasta'}</li>
   `)
});

app.post('/check', (req, res) => {
    if(req.body.name === 'Laimis') {
        res.send('Administratorius');
    } else {
        res.send ('Vartotojas');
    }
});

//Serverio paleidimas port`e 3000
app.listen(3001);