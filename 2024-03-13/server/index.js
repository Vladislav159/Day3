import express from 'express';
import mongoose from 'mongoose';
import user from './controller/user.js';
import posst from './controller/posts.js';
import upload from './middleware/multer.js';

//Applikacijos inicijavimas
const app = express();

//Perduodamu reiksmiu urlencoded formatu paemimo nustatymas
app.use(express.urlencoded({
    extended: true
}));

//Failu pasiekiamumo priskirymas nurodant;
//Pirmu parametru - url kelia
//Antru parametru - direktorija kurioje saugomi failai
app.use('/files/', express.static('./uploads'));
//Controlerio registravimas
app.use('/users/', user);
app.use('/posts/', posst);


// Midleware priskirymas(tarpininkas)
// Upload single() - naudojimas vienam failui ikelti
//Array- naudojimas keliems failams ikelti
//Upload.fields - naudojimas keliems failams skirtingoms name reiksmems
//Nurodomi laukeliu pavadinimasi (name) ir pasirinktinai maks kiekis (maxCount :2)
// upload.fields([{ name: 'image' }, {name: 'failas' } ])
//PVZ:
 
// app.post('/files', upload.fields([{ name: 'image', maxCount: 2 }, {name: 'failas', maxCount: 2 } ]), (req,res) => {
    
//     res.send('Failas sekmingai ikeltas')
// })

// Prisijungimas prie mongo duomenu bazes pavadinimu: first_database
await mongoose.connect('mongodb://localhost:27017/first_database');

 //MVC -
// model - Atsakingas uz informacijos paemima is DATABAse
// view -Atsakingas uz is controlellerio gautos informacijos atvaizdavima
// controller - atsakingas uz modelio informacijos apdorojima

app.listen(3000);