# Essa api possui a responsabilidade de tratar as requisições e respostas do front-end de estatisticas

<section>
  <h2>Rotas</h2>
  <ul>
    <li>Filtros: Essa api possui uma rota dinamica para obter os filtros, onde o endpoint /filter/:filter recebe somente o filtro o qual quero obter as opções, então quando é feita uma requisição para esse endpoint, é feita uma requisição para o banco e retorno esses dados para o front-end</li>
    <li>Dados dos graficos: aqui temos duas rotas, uma para empresas abertas e outra para empresas ativas, ambas utilizam a mesma função para criar as querys correspondentes para cada grafico da aplicação, essas querys são feitas baseadas no estado dos filtros do front-end enviados via post. Com as querys criadas, são feitas as requisições ao banco de dados, e estes retornados ao front-end</li>
  </ul>
  <h2>Sobre a queryBuild</h2>
  <p>Esse arquivo é o coração da aplicação, pois é a função responsável por criar as querys que serão usadas no banco, essa função é complexa e foi complexo o processo até chegar no resultado final, mesmo com toda a dificuldade enfrentada, conseguimos alcançar o objetivo esperado.</p>
  
</section>
