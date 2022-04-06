// armazena o banco de dados
// let database = "../database.json";

let mentores = [
  {
    name: "Larissa Orikava",
    category: "UX Design",
    rating: "4",
  },
  {
    name: "Luiz Nola",
    category: "Desenvolvimento Fullstack",
    rating: "5",
  },
  {
    name: "Guilherme Silva",
    category: "Marketing",
    rating: "3",
  },
  {
    name: "Mariana Mendanha",
    category: "Marketing",
    rating: "4",
  },
];

// pegar as áreas de nome e categoria da tela
let mentorName = document.getElementById("mentor-name-profile");
let category = document.getElementById("category-profile");
// let rating = document.getElementById

// vai receber o id do mentor
mentorName.textContent = mentores[0].name;
category.textContent = mentores[0].category;
let rating = parseFloat(mentores[0].rating);

// todas as estrelas do HTML
const stars = document.querySelectorAll(".star-icon");
console.log(stars);
let listaStar = document.getElementById("classStar")

  // para pegar a posição correta no array stars
  let i = rating - 1;
  // pega o valor do data-avaliacao nesse caso data-avaliacao = 4
  let av = stars[i].attributes[1].value;
  console.log(av);
 
// adiciona a classe ativo se o rating(avaliação) for igual a posição do data-avaliacao
  if(rating == av){
  stars[i].classList.add("ativo")
  console.log("funcionou")
  console.log(stars)
}


