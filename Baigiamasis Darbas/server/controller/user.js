import { Router } from 'express';
import User from '../model/user.js';


const router = Router();

router.get('/',async  (req, res) => {
     
    // Visu irasu grazinimas
    try {
    res.json(await User.find());
    } catch {
        res.status(500).json('Ivyko klaida');
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json(
            await User.findById(req.params.id)
                    //    .select(['last_name', 'photo', 'email'])
                    //   .populate('posts')
                               
        ); 
    } catch {
        res.status(500).json('Įvyko klaida');
    }
});

router.post('/login', async (req, res) => {
    // console.log(req.body)
    // Prisijungimui tikimės:
    // Emailo ir slaptažodžio
    try {
        // findOne metodas grąžina tik vieno įrašo informaciją
        const data = await User.findOne({ email: req.body.email });
        
        // Jei vartotojas nerastas nuotraukiame funkciją ir grąžiname žinutę
        if(!data)
            return res.status(401).json('Neteisingas el. pašto adresas');
        
      
        // Priskiriame vartotojo informaciją prie sesijos
        req.session.user = {
            _id: data._id,
            user_name: data.user_name,
            email: data.email
        }

        // Išsiunčiame vartotojo duomenis
        res.json(req.session.user);
    } catch {
        // Grąžinamas atsakymas įvykus klaidai
        res.status(500).json('Įvyko klaida prisijungiant');
    }      
});


router.post('/register', async (req, res) => {
    try {
        // Jeigu turime persiunčiamą nuotrauką
        // if(req.file) 
        //     req.body.photo = req.file.filename; //Priskiriame failo pavadinimą prie į mongodb įrašomų duomenų

        // // Slaptažodžio šifravimas
        // // hash - yra šifruotas stringas
        // req.body.password = await bcrypt.hash(req.body.password, 10);

        // Sukuriame vartotoją
        await User.create(req.body);
        // Grąžiname žinutę
        res.json('Vartotojas sekmingai sukurtas');
       
    } catch(e) {
        console.log(e);
        // Įvykus klaidai grąžiname klaidos kodą ir žinutę
        res.status(500).json('Registruojant vartotoją įvyko klaida');
    }
});

export default router;