import express from 'express';
import sampleDados from './data/sampleDados.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dataRouter from "./router/router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', dataRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
