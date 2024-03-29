import { Router } from 'express';
import User from '../model/user.js';
import upload from '../middleware/multer.js'
import { rm } from 'node:fs/promises';

const router = Router();

router.get('/',async  (req, res) => {
     
    // Visu irasu grazinimas
    try {
    res.json(await User.find());
    } catch {
        res.status(500).json('Ivyko klaida');
    }
});

router.get('/:id' , async (req, res) => {
    //Vieno iraso paemimas 

    //Norint paimti parametro reiksme: req.params
    try {
    res.json(await User.findById(req.params.id));
    } catch {
    res.status(500).json('Ivyko klaida');
    }
    
} )

//Naujo vartotojo sukurimas
router.post('/', upload.single('image'), async (req, res) => {

        if(req.file)
            req.body.photo = req.file.filename;

        await User.create(req.body);
        
        res.send ({ message: 'New User', request: req.body})
});

// irasu atnaujinimas
router.put('/:id',upload.single('image'), async (req, res) => {

    if(req.file) {
        const oldUser = await User.findById(req.params.id);
        if(oldUser.photo) {
            await rm('./uploads/' + oldUser.photo);
        }
        req.body.photo = req.file.filename;
    }
   try{
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Edited', request: req.body });
   } catch {
    res.status(500).json('Ivyko klaida');
   }

    
});

// IRaso istrinimas

router.delete('/:id',upload.single('image'), async (req, res) => {

    try {
    await User.findByIdAndDelete(req.params.id);
    res.send('ID Deleted ' + req.params.id);
    } catch {
        res.status(500).json('Ivyko klaida');
    }
   
});

export default router;