//Importamos o express
import express from "express";


//Criamos uma constante para instanciar o express
const app = express();

//Dizer para usar o express.json
app.use(express.json())

//criamos uma constante de livros que sera um array
const livros = [
    {id: 1, "titulo": "Senhor dos aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

//Programando nosso GET criando a rota raiz
app.get('/',(req,res) => {
    res.status(200).send('Curso de Node')
})

//Criando o metodo para buscar um livro por id
app.get('/livros/:id',(req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

// Criamos a rota para listar os livros do array
app.get('/livros', (req,res) => {
    res.status(200).json(livros)
})

// Criacao do metodo para inserir um livro
app.post('/livros',(req,res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
})

//Criando o metodo para atualizar um livro
app.put('/livros/:id',(req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

//Criando o metodo para deletar um livro
app.delete('/livros/:id',(req, res) => {
    //usando desestruturação 
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index,1)
    res.send(`Livro ${id} removido com sucesso`);
})

//funcao para localizar a posicao do array pelo indice
function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

//exportanto arquivo para uso em outra pasta
export default app

