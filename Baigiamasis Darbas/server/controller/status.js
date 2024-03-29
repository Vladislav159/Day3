import { Router } from 'express';
import status from '../model/status.js';

const router = Router();

// Naujo iraso sukurimas
router.get('/posts', async (req, res) => {
    try {
        // Populate metodas uzpildo schemoje pazymeta raktazodi modelio informacijoje
       res.json(await status
                        .find()
                        // .populate('stat_name', ['status'])

        );
    } catch {
        res.status(500).json('ivyko prisijungimo klaida')
    }
});


export default router;