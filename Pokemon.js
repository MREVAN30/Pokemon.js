const body = document.body;
const version ="1.0"
const devs= "by void end the games"
function Pikachu(texto) {
  document.body.innerHTML += `<p>${texto}</p>`;
}

function charizard(textbutton ,id) {
  
  const button = document.createElement("button")
  document.body.appendChild(button)
  
  button.textContent= textbutton
  button.id= id
  
  
}

function meowth(limite, callback) {
  for (let i = 0; i < limite; i++) {
    callback(i); 
  }
}





function chamander(valor) {
  return [valor];
}


function processPokemonTags() {
  const pokemonTags = document.querySelectorAll("pokemon");

  pokemonTags.forEach(tag => {
    const code = tag.textContent.trim();

    tag.remove();

    eval(code);
  });
}


document.addEventListener("DOMContentLoaded", processPokemonTags);
