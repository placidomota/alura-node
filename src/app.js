//Importamos o express
import express from "express";


//Criamos uma constante para instanciar o express
const app = express();

//criamos uma constante de livros que sera um array
const livros = [
    {id: 1, "titulo": "Senhor dos aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

//Programando nosso GET criando a rota raiz
app.get('/',(req,res) => {
    res.status(200).send('Curso de Node')
})

// Criamos a rota para listar os livros do array
app.get('/livros', (req,res) => {
    res.status(200).json(livros)
})

//exportanto arquivo para uso em outra pasta
export default app

