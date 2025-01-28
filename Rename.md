<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Biblioteca de Funções Pokémon</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      padding: 0;
    }
    h1, h2 {
      color: #4CAF50;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 4px;
      border-radius: 4px;
    }
    pre {
      background-color: #f9f9f9;
      border-left: 4px solid #4CAF50;
      padding: 10px;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <h1>Biblioteca de Funções Pokémon</h1>
  <p>
    Esta biblioteca oferece funções para adicionar elementos ao DOM e executar códigos de forma dinâmica. Desenvolvida por 
    <strong>Void End the Games</strong>. Versão: <strong>1.0</strong>.
  </p>
  
  <h2>Funções</h2>

  <h3><code>Pikachu(texto, color)</code></h3>
  <p>Adiciona um parágrafo ao corpo do documento com o conteúdo e a cor fornecidos.</p>
  <p><strong>Parâmetros:</strong></p>
  <ul>
    <li><code>texto</code> (string): O texto que será exibido no parágrafo.</li>
    <li><code>color</code> (string): A cor do texto (nome ou código hexadecimal).</li>
  </ul>
  <p><strong>Exemplo de uso:</strong></p>
  <pre>
Pikachu("Olá, Pokémon!", "red");
  </pre>

  <h3><code>charizard(textButton, id, baccor, texcor, pe)</code></h3>
  <p>Cria um botão estilizado com texto, ID e cores personalizadas e o adiciona ao corpo do documento.</p>
  <p><strong>Parâmetros:</strong></p>
  <ul>
    <li><code>textButton</code> (string): O texto exibido no botão.</li>
    <li><code>id</code> (string): O ID atribuído ao botão.</li>
    <li><code>baccor</code> (string): A cor de fundo do botão.</li>
    <li><code>texcor</code> (string): A cor do texto no botão.</li>
    <li><code>pe</code> (number): O preenchimento interno (padding) do botão.</li>
  </ul>
  <p><strong>Exemplo de uso:</strong></p>
  <pre>
charizard("Clique aqui", "botao01", "#4CAF50", "white", 10);
  </pre>

  <h3><code>meowth(limite, callback)</code></h3>
  <p>Executa uma função callback um número específico de vezes, passando o índice como argumento.</p>
  <p><strong>Parâmetros:</strong></p>
  <ul>
    <li><code>limite</code> (número): O número de vezes que a callback será executada.</li>
    <li><code>callback</code> (função): A função a ser chamada, recebendo o índice atual.</li>
  </ul>
  <p><strong>Exemplo de uso:</strong></p>
  <pre>
meowth(3, function(i) {
  console.log(`Executando a iteração ${i}`);
});
  </pre>

  <h3><code>chamander(valor)</code></h3>
  <p>Retorna um array contendo o valor fornecido como argumento.</p>
  <p><strong>Parâmetros:</strong></p>
  <ul>
    <li><code>valor</code> (qualquer tipo): O valor a ser retornado em um array.</li>
  </ul>
  <p><strong>Exemplo de uso:</strong></p>
  <pre>
const resultado = chamander(10);
console.log(resultado); // [10]
  </pre>

  <h3><code>processPokemonTags()</code></h3>
  <p>
    Procura por tags <code>&lt;pokemon&gt;</code> no documento e executa o código dentro delas. Após a execução, as tags são 
    removidas do DOM.
  </p>
  <p><strong>Exemplo de uso:</strong></p>
  <pre>
<pokemon>console.log('Olá, mundo!');</pokemon>
  </pre>
  <p>Essa função é executada automaticamente quando o evento <code>DOMContentLoaded</code> é disparado, garantindo que o código 
  seja processado após o carregamento do documento.</p>

  <h2>Considerações Finais</h2>
  <p>
    Essa biblioteca foi criada para simplificar a adição de elementos dinâmicos e a execução de funções específicas no DOM. 
    Para utilizá-la, basta importar o código JavaScript na sua página e começar a usar as funções definidas.
  </p>
  <p><strong>Desenvolvido por Void End the Games.</strong></p>
</body>
</html>