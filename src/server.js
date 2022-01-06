//yarm dev => inicia o servidor do nodemoon
//yarm init -y
const express = require('express'); //express ajuda em definições básicas de rotas e coisas do tipo

const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3333

//req = toda requisição do usuario
//res = devolve uma resposta para o usuário

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, deleção)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json())
app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));