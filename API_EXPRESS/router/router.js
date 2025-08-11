import { Router } from 'express';
import { getAllDados } from '../controller/controller.js';

const router = Router();

//rota para retornar os dados
router.get('/', getAllDados);

export default router;