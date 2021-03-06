// inicializa os cards assim que o HTML é carregado
document.addEventListener("DOMContentLoaded", () => {
  initializeCards();
});

// armazena o banco de dados
let database = "../database.json";

let identity;

// inicializar os cards
function initializeCards() {
  fetch(database)
    .then((response) => {
      return response.json();
    })
    .then((dataMentors) => showMentors(dataMentors))
    .catch((error) => {
      console.log(error);
    });
}

// cria os cards e adiciona a info de cada usuário dentro deles
function createCard(dataMentors, id) {
  // área onde mostrará os cards dos mentores
  let cards = document.querySelector(".cards");
  
  // cria a estrutura do card e adiciona a área de conteúdo (cards)
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  cards.appendChild(card);

  // adiciona a imagem do mentor dentro do card
  let image = document.createElement("img");
  image.setAttribute("class", "card__image");
  image.setAttribute("src", "../assets/images/user.png");
  card.appendChild(image);

  // adiciona a estrutura do card body (onde ficarão as demais infos)
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card__info");
  card.appendChild(cardBody);

  // adiciona o nome do mentor
  let mentorName = document.createElement("h2");
  mentorName.setAttribute("class", "card__title");
  mentorName.textContent = dataMentors.mentors[id].name;
  cardBody.appendChild(mentorName);

  // adiciona a category (área de interesse)
  let category = document.createElement("p");
  category.setAttribute("class", "card__category");
  category.textContent = dataMentors.mentors[id].category;
  cardBody.appendChild(category);

  // adiciona o botão para ver o perfil do mentor em uma segunda tela, ao clicar no botão é identificado o id do mentor
  let buttonProfile = document.createElement("button");
  buttonProfile.setAttribute("class", "card__button");
  // buttonProfile.setAttribute("class", "btn btn-warning btn-outline-dark");
  buttonProfile.innerHTML = "Saiba +";
  buttonProfile.addEventListener('click', function(e){
    identity = (e.target.id)
    openProfile(identity)

  })
  cardBody.appendChild(buttonProfile);
}

// função para inicializar a área de mentores na área de destaque
// nesse primeiro momento pega os 4 primeiros registrados no Banco de dados
function showMentors(dataMentors) {
  for (let i = 0; i < 4; i++) {
    createCard(dataMentors, i);
  }
}

// o window.location redirect será substituído por uma rota
function openProfile(identity){
  console.log(identity)
  window.location.href = "../pages/mentor_profile.html"
}

