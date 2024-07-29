## Documentação do projeto 

## Factory Method

Utilizado para criar instâncias dos repórteres com base no formato especificado. Isso promove a extensão fácil para novos formatos de repórteres sem modificar o código existente, aderindo ao princípio OCP.

## Adapter

Permitimos que os repórteres sejam usados de forma intercambiável adaptando-os para uma interface comum (`IReporter`). Isso promove a conformidade com o princípio DIP, separando as classes de alto nível das implementações de baixo nível.

##  Template Method

Definimos o esqueleto das operações de leitura, parsing e geração de relatório, permitindo que as subclasses implementem os detalhes específicos. Isso facilita a manutenção e extensão do código.

## Refatorações SOLID

1.  **SRP**: Cada classe (`CidadesHTMLReporter`, `CidadesTXTReporter`) é responsável apenas pela geração de relatórios em um formato específico.
2.  **OCP**: A adição de novos formatos de relatório pode ser feita criando novas subclasses de `IReporter` e estendendo a `ReporterFactory` sem modificar o código existente.
3.  **DIP**: As classes de alto nível (`index.js`) dependem da abstração (`IReporter`) e não de implementações específicas.

## Como testar o código: 

#### Em seu terminal, digite a seguinte linha de comando para instalarmos os pacotes e libs utilizadas no código:
````
npm install
````
##### Após a conclusão da instalação, podemos disparar o seguinte comando, para visualizar o retorno do código no terminal da IDE utilizada:

````
node index.js --file ./data/cidades-2.json --format html
node index.js --file ./data/cidades-2.json --format txt
````
- Este comando irá retornar tanto o formato html  tanto quanto o formato txt do nosso projeto.
