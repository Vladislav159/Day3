import { Router } from 'express';
import User from '../model/user.js';
import upload from '../middleware/multer.js'

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
router.post('/',upload.single('image'), async (req, res) => {

        // req.body.photo = req.file.filename;

        await User.create(req.body);

        res.send (req.body)
});
// irasu atnaujinimas
router.put('/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);

    res.send(req.body)
});

// IRaso istrinimas

router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('Irasas sekmingai istrintas');
});

export default router;