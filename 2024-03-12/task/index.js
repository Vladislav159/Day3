import express from 'express';
const app = express();

app.use(express.urlencoded({
    extended: true
  }));

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/login', (req, res) => {
    // console.log(req.body);
    if(req.body.email === 'admin@vcs.lt' && req.body.password === 'Github12') {
        res.send('Sveikiname sekmingai prisijungus');
    } else if (!req.body.email  || !req.body.password ) {
        res.send('Negavome jokiu duomenu,bandykite dar karta ');
        
    } else {
        res.send('Neteisingi prisijungimo duomenys');
    }
});

app.get('/news', (req, res) => {
    // console.log(req.query.adsource);
    const stringas = `
        <span>Google: DEMON ATTACK</span>
        <span>Amazon: Sandelio valymas</span>
        <span>Crazy</span>
       
    `
    if(req.query.adsource === 'google') {
        res.send(`<h1>Google reklamos blokas</h1> ${stringas}`);
       } else if (req.query.adsource === 'amazon'){
        res.send(`<h1>Amazon reklamos blokas</h1> ${stringas}`)  ;
       } else {
        res.send('empty');
       }

       `
        <span>Google: DEMON ATTACK</span>
        <span>Amazon: Sandelio valymas</span>
        <span>Crazy</span>
       
    `
});

const validateEmail = (email) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
};

const passwordValid = (password) => {
    return /[0-9]/.test(password);
}

app.post('/register', (req, res) => {
console.log(req.body)

if(!req.body.name || !req.body.last_name || !req.body.email || !req.body.password) {
    return res.send('Negauti registracijos duomenys');
}

if(req.body.name.length <= 3 || req.body.name.length >=200 ) {
    return res.send('Neteisingai įvestas vardas');
}

if(req.body.last_name.length <= 3 || req.body.last_name.length >=200 ) {
    return res.send('Neteisingai įvesta pavardė');
}

if(req.body.email.length <= 5 || req.body.email.length >= 50) {
    return res.send('Neteisingai įvestas el.pašto adresas')
}else if (!validateEmail(req.body.email)) {
    return res.send('Neteisingai įvestas pastas')
}

if (req.body.password.length <= 8 || req.body.password.length >= 16) {
    return res.send('Neteisingai įvestas slaptažodis')    
}else if (!passwordValid(req.body.password)) {
        return res.send('Neteisingai įvestas slaptažodis')
}

res.send('Sveikiname sėkmingai prisiregistravus platformoje')

})



app.listen(3002);