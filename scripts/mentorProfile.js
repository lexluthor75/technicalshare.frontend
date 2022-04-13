// inicializa os cards assim que o HTML é carregado
document.addEventListener("DOMContentLoaded", () => {
  initializeInfo();
});

// ler o id do usuário escolhido na url da página
const urlParams = new URLSearchParams(window.location.search)
const getId = urlParams.get("id")

// id do mentor
const idMentor = parseInt(getId)


// inicializar as informações do mentor de acordo com o id
async function initializeInfo() {
  return await findUserById(idMentor)
    .then((dataMentors) => {
      showInfo(dataMentors);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}

function showInfo(dataMentors) {
  // armazena as áreas de nome e categoria da tela
  let mentorName = document.getElementById("mentor-name-profile");
  let category = document.getElementById("category-profile");
  let skill = document.getElementById("skill-profile")

  // vai receber o id do mentor
  mentorName.textContent = dataMentors.name;
  category.textContent = dataMentors.email;
  skill.textContent = dataMentors.skills.skill
  
  // mostrar a avaliação da habilidade
  let rating = parseFloat(dataMentors.skills.rating);

  // todas as estrelas do HTML
  const stars = document.querySelectorAll(".star-icon");
  console.log(stars);

  // para receber a posição correta no array stars
  let i = rating - 1;
  
  // pega o valor do data-avaliacao 
  let av = stars[i].attributes[1].value;
  // console.log(av);

  // adiciona a classe ativo se o rating(avaliação) for igual a posição do data-avaliacao
  if (rating == av) {
    stars[i].classList.add("ativo");
  }
}
