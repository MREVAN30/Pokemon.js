const body = document.body;
const version = "1.0";
const devs = "by Void and The Games";

function Pikachu(texto,color) {
  const paragraph = document.createElement("p");
  paragraph.textContent = texto;
  paragraph.style.color = color
  body.appendChild(paragraph);
}



function charizard(textButton, id,baccor,texcor,pe) {
  const button = document.createElement("button");
  button.textContent = textButton;
  button.id = id;
  button.style.backgroundColor = baccor
  button.style.color = texcor
  button.style.padding =pe +"px"
  body.appendChild(button);
}

function meowth(limite, callback) {
  for (let i = 0; i < limite; i++) {
    callback(i);
  }
}

function chamander(valor) {
  return [valor];
}
function pokehtml (elemnte) {
body.innerHTML= elemnte
  
}

function processPokemonTags() {
  const pokemonTags = document.querySelectorAll("pokemon");

  pokemonTags.forEach(tag => {
    const code = tag.textContent.trim();
    tag.remove();

    try {
      const executeCode = new Function(code);
      executeCode();
    } catch (error) {
      console.error("Erro ao processar código dentro da tag <pokemon>:", error);
    }
  });
}

document.addEventListener("DOMContentLoaded", processPokemonTags);