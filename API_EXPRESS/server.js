import express from "express";
import dataRouter from "./router/router.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware para interpretar o JSON
app.use(express.json());

app.use(express.static('public'));

//rota da API
app.use('/', dataRouter);

app.listen(PORT, () =>{
  console.log("Servidor rodando em localhost:3000")
});

