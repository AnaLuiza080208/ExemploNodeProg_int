import express from 'express';
import sampleDados from '../data/sampleDados.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(sampleDados);
});

export default router;
