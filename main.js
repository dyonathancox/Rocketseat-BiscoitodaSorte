//Variáveis
const screen1 = document.querySelector('.screen-1');
const screen2 = document.querySelector('.screen-2');
const imgCookieClosed = document.querySelector('.screen-1 svg');
let randomPhrase = Math.round(Math.random() * 10)

//Frases
let phrases = [
  "A sorte favorece os corajosos, então siga em frente sem medo.",
  "Acredite na sorte, mas lembre-se de que ela favorece os preparados.",
  "A sorte é como uma semente: plante-a com boas ações e colha os frutos do sucesso.",
  "Nenhum vento é favorável para quem não sabe para onde está indo - sorte é saber seu destino.",
  "A sorte sorri para aqueles que persistem, mesmo nas adversidades.",
  "Não confie apenas na sorte; ela é uma parceira, não um guia.",
  "Sorte é quando a preparação encontra a oportunidade.",
  "A sorte é como um raio de sol: às vezes você tem que sair da sombra para encontrá-la.",
  "A sorte não é um destino, é uma jornada - aproveite cada passo.",
  "Na incerteza da vida, a sorte é o nosso bússola interior."
];


//Eventos
screen2.querySelector('button').addEventListener('click', btnReset)
imgCookieClosed.addEventListener('click', openCookie);

//funções
function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function phrase(){
  document.querySelector('.screen-2 p').innerText = phrases[randomPhrase]
}

function openCookie(){
  toggleScreen()
  phrase()
}

function btnReset(){
  toggleScreen()
  randomPhrase = Math.round(Math.random() * 10)
}