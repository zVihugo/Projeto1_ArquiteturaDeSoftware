# Documentação do Projeto

## Factory Method
A Factory Method cria repórteres com base no formato que você especificar. Isso facilita a adição de novos formatos de repórteres sem mexer no código antigo, seguindo o princípio OCP.

## Adapter
Com o Adapter, os repórteres podem ser usados de forma intercambiável, adaptando-os para uma interface comum (Rep). Isso separa as classes de alto nível das de baixo nível, conforme o princípio DIP.

## Template Method
O Template Method define o esqueleto das operações de leitura, parsing e geração de relatório, permitindo que as subclasses implementem os detalhes específicos. Isso facilita a manutenção e a extensão do código.

## Refatorações SOLID
1. **SRP**: Cada classe (CidadesHTMLReporter, CidadesTXTReporter) é responsável apenas pela geração de relatórios em um formato específico.
2. **OCP**: Novos formatos de relatório podem ser adicionados criando novas subclasses de Rep e estendendo a FactRep sem modificar o código existente.
3. **DIP**: As classes de alto nível (index.js) dependem da abstração (Rep) e não de implementações específicas.
   
## Como Testar o Código
#### No terminal, digite o comando abaixo para instalar os pacotes e libs utilizadas no código:

````
npm install
````
Após a instalação, use o seguinte comando para visualizar o retorno do código no terminal da IDE:

````
node index.js --file ./data/cidades-2.json --format html
node index.js --file ./data/cidades-2.json --format txt
````
- Esse comando vai retornar tanto o formato HTML quanto o formato TXT do nosso projeto.
- Insira um comando por vez, para ficar melhor a visualização do resultado no terminal

#### Após inserido os códigos mencionados, iremos obter no terminal um resultado como este:
##### Retorno na forma de HTML:
![image](https://github.com/user-attachments/assets/ff290b1f-6b0b-4691-86ce-87abb4b59154)
##### Retorno na forma de TXT:
![image](https://github.com/user-attachments/assets/c85e1d6e-3596-4a7b-8b2b-f9f024a4a8cc)
