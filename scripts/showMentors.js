// inicializa os cards assim que o HTML é carregado
document.addEventListener("DOMContentLoaded", () => {
  initializeCards();
});

// armazena o banco de dados
// let database = "../database.json";

let identity;

// área onde mostrará os cards dos mentores
let cards = document.querySelector(".cards");
let card = document.createElement("div");
let image;
let cardBody;
let mentorName;
let category;
let buttonProfile;

// inicializar os cards
async function initializeCards() {
  return await getUsers()
    .then((dataMentors) => {
      showMentors(dataMentors);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}

// cria os cards e adiciona a info de cada usuário dentro deles
function createCard(dataMentors, id) {
  // cria a estrutura do card e adiciona a área de conteúdo (cards)
  card = document.createElement("div");
  card.setAttribute("class", "card");
  cards.appendChild(card);

  // adiciona a imagem do mentor dentro do card
  image = document.createElement("img");
  image.setAttribute("class", "card__image");
  image.setAttribute("src", "../assets/images/user.png");
  card.appendChild(image);

  // adiciona a estrutura do card body (onde ficarão as demais infos)
  cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card__info");
  card.appendChild(cardBody);

  // adiciona o nome do mentor
  mentorName = document.createElement("h2");
  mentorName.setAttribute("class", "card__title");
  mentorName.textContent = dataMentors[id].name;
  cardBody.appendChild(mentorName);

  // let categoryBody = document.createElement("div")
  // categoryBody.setAttribute("class", "card__category")
  // cardBody.appendChild(categoryBody)

  // adiciona a category (área de interesse)
  category = document.createElement("p");
  category.setAttribute("class", "card__category");
  category.textContent = dataMentors[id].email;
  cardBody.appendChild(category);

  // adiciona o botão para ver o perfil do mentor em uma segunda tela, ao clicar no botão é identificado o id do mentor
  buttonProfile = document.createElement("button");
  buttonProfile.setAttribute("class", "card__button");
  buttonProfile.setAttribute("id", dataMentors[id].id);
  buttonProfile.innerHTML = "Saiba +";
  buttonProfile.addEventListener("click", function (e) {
    identity = e.target.id;
    openProfile();
  });
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
function openProfile(){
  console.log(identity)
  window.location.href = "../pages/mentor_profile.html?id="+identity
}
