import { Router } from 'express';
import Post from '../model/post.js';
// import status from '../model/status.js';
import upload from '../middleware/multer.js';
import { rm } from 'node:fs/promises';


const router = Router();


//Iraso paemimas
router.get('/:id', async (req, res) => {
    try {
        res.json(
            await Post.findById(req.params.id));
    } catch(e) {
        console.log(e)
        res.status(500).json('ivyko klaida')
    }
})
// Visu irasu grazinimas
router.get('/',async  (req, res) => {

 res.send(await Post.find().populate('author', ['user_name'])
                            .populate('stat_name'))
});

//Naujo posto sukurimas 
router.post('/', upload.single('photo'), async (req, res) => {
    if(req.file)
        req.body.photo = req.file.filename;

    try {
        await Post.create(req.body);
        res.json('Įrašas sėkmingai išssaugotas' );
    } catch(e) {
        // console.log(e);
        // Įvykus klaidai grąžiname klaidos kodą ir žinutę
        
        res.status(500).json('Įvyko klaida');
    }
});


//Iraso atnaujinimas
router.put('/:id',upload.single('photo'), async (req, res) => {
   if(req.file) {
       const oldPost = await Post.findById(req.params.id);
       if(oldPost.photo) {
           await rm('./uploads/' + oldPost.photo);
       }
       req.body.photo = req.file.filename;
   }

    await Post.findByIdAndUpdate(req.params.id, req.body);

  res.send(req.body);
});

//Iraso istrinimas
router.delete('/:id', async (req, res) => {

   await Post.findByIdAndDelete(req.params.id);
   res.json('Įrašas sėkmingai ištrintas');
});

export default router;