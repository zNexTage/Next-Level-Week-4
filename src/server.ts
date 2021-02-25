import 'reflect-metadata';
import "./database"
import express from 'express';
import router from './Router';

const app = express();

app.use(express.json())
app.use(router);

const PORT = 3333;

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica * 
 */

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


