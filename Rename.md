
# Biblioteca de Funções Pokémon
Esta biblioteca oferece funções para adicionar elementos ao DOM e executar códigos de forma dinâmica. Desenvolvida por **Void End the Games**. Versão: **1.0**.

## Funções

### `Pikachu(texto)`
Adiciona um parágrafo ao corpo do documento com o conteúdo fornecido.  
**Parâmetros:**  
- `texto` (string): O texto que será exibido no parágrafo.  
**Exemplo de uso:**  
```javascript  
Pikachu("Olá, Pokémon!");

charizard(textbutton, id)

Cria um botão com o texto e ID fornecidos e o adiciona ao corpo do documento.
Parâmetros:

textbutton (string): O texto que será exibido no botão.

id (string): O ID que será atribuído ao botão.
Exemplo de uso:


charizard("Clique aqui", "botao01");

meowth(limite, callback)

Executa uma função de retorno (callback) um número específico de vezes, com o índice como argumento.
Parâmetros:

limite (número): O número de vezes que a função de retorno será chamada.

callback (função): A função a ser chamada, que recebe o índice atual da iteração.
Exemplo de uso:


meowth(3, function(i) {  
  console.log(`Executando a iteração ${i}`);  
});

chamander(valor)

Retorna um array contendo o valor fornecido como argumento.
Parâmetros:

valor (qualquer tipo): O valor a ser retornado em um array.
Exemplo de uso:


const resultado = chamander(10);  
console.log(resultado); // [10]

processPokemonTags()

Procura por tags <pokemon> no documento e executa o código que estiver dentro delas. Após a execução, as tags são removidas do DOM.
Exemplo de uso:

<pokemon>console.log('Olá, mundo!');</pokemon>

Esta função é chamada automaticamente quando o evento DOMContentLoaded é disparado, garantindo que o código dentro das tags <pokemon> seja executado assim que o documento for carregado.

Considerações Finais

Essa biblioteca foi criada para simplificar a adição de elementos dinâmicos e a execução de funções específicas no DOM. Para utilizá-la, basta importar o código JavaScript na sua página e começar a usar as funções definidas.

Desenvolvido por Void End the Games.

Agora o conteúdo está todo organizado, sem saltos de linha desnecessários e dentro do formato que você desejou!

