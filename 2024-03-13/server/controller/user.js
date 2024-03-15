import { Router } from 'express';
import User from '../model/user.js';
import upload from '../middleware/multer.js'
import { rm } from 'node:fs/promises';

const router = Router();

router.get('/',async  (req, res) => {
     
    // Visu irasu grazinimas

    res.send(await User.find());
});

router.get('/:id' , async (req, res) => {
    //Vieno iraso paemimas 

    //Norint paimti parametro reiksme: req.params
    // console.log(req.params.id);
    res.send(await User.findById(req.params.id));
    
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

    await User.findByIdAndUpdate(req.params.id, req.body);

    res.send({ message: 'Edited', request: req.body })
});

// IRaso istrinimas

router.delete('/:id',upload.single('image'), async (req, res) => {


    await User.findByIdAndDelete(req.params.id);
    res.send('ID Deleted ' + req.params.id);
   
});

export default router;