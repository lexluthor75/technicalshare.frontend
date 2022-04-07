// inicializa os cards assim que o HTML é carregado
document.addEventListener("DOMContentLoaded", () => {
  initializeInfo();
});

// armazena o banco de dados
let database = "../database.json";

// simular a entrada do id do mentor
const idMentor = 0;

// inicializar as informações do mentor
function initializeInfo() {
  fetch(database)
    .then((response) => {
      return response.json();
    })
    .then((dataMentors) => showInfo(dataMentors))
    .catch((error) => {
      console.log(error);
    });
}

function showInfo(dataMentors) {
  // pegar as áreas de nome e categoria da tela
  let mentorName = document.getElementById("mentor-name-profile");
  let category = document.getElementById("category-profile");
  let skill = document.getElementById("skill-profile")

  // vai receber o id do mentor
  mentorName.textContent = dataMentors.mentors[idMentor].name;
  category.textContent = dataMentors.mentors[idMentor].category;
  skill.textContent = dataMentors.mentors[idMentor].skills.skill_1
  
  // mostrar a avaliação da habilidade
  let rating = parseFloat(dataMentors.mentors[idMentor].skills.rating);

  // todas as estrelas do HTML
  const stars = document.querySelectorAll(".star-icon");
  console.log(stars);
  let listaStar = document.getElementById("classStar");

  // para pegar a posição correta no array stars
  let i = rating - 1;
  // pega o valor do data-avaliacao 
  let av = stars[i].attributes[1].value;
  console.log(av);

  // adiciona a classe ativo se o rating(avaliação) for igual a posição do data-avaliacao
  if (rating == av) {
    stars[i].classList.add("ativo");
    console.log("funcionou");
    console.log(stars);
  }
}
