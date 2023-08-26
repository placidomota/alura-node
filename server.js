// importando o app.js para usar-lo
import app from './src/app.js'


//Fazemos um condicional na porta  definimos ou a porta no ambiente de producao ou a porta 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})