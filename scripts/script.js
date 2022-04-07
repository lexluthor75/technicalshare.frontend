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
  let content = document.querySelector(".content");
  
  // cria a estrutura do card e adiciona a área de conteúdo (content)
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  content.appendChild(card);

  // adiciona a imagem do mentor dentro do card
  let image = document.createElement("img");
  image.setAttribute("class", "card-img-top");
  image.setAttribute("src", "../assets/user.svg");
  card.appendChild(image);

  // adiciona a estrutura do card body (onde ficarão as demais infos)
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body d-flex flex-column justify-content-around");
  card.appendChild(cardBody);

  // adiciona o nome do mentor
  let mentorName = document.createElement("h2");
  mentorName.setAttribute("class", "card-title");
  mentorName.textContent = dataMentors.mentors[id].name;
  cardBody.appendChild(mentorName);

  // adiciona a category (área de interesse)
  let category = document.createElement("p");
  category.setAttribute("class", "card-text text-muted");
  category.textContent = dataMentors.mentors[id].category;
  cardBody.appendChild(category);

  // adiciona o botão para ver o perfil do mentor em uma segunda tela, ao clicar no botão é identificado o id do mentor
  let buttonProfile = document.createElement("button");
  buttonProfile.setAttribute("class", "btn btn-warning btn-outline-dark");
  // buttonProfile.setAttribute("class", "btn btn-warning btn-outline-dark");
  buttonProfile.innerHTML = "Ver perfil";
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

function openProfile(identity){
  console.log(identity)
  window.location.href = "../pages/mentor_profile.html"
}

