import express from 'express';

const app = express();

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

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
})

//1 Param => Rota
//2 Param => (request, response)
app.post("/", (req, res) => {
    //Recebeus os dados para salvar
    res.json({ message: "Ai sim em cara!!" });
})
