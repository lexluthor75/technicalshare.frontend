// armazena o banco de dados
// let database = "../database.json";

let mentores = [
  {
    name: "Larissa Orikava",
    category: "UX Design",
  },
  {
    name: "Luiz Nola",
    category: "Desenvolvimento Fullstack",
  },
  {
    name: "Guilherme Silva",
    category: "Marketing",
  },
  {
    name: "Mariana Mendanha",
    category: "Marketing",
  },
];

// pegar as áreas de nome e categoria da tela
let mentorName = document.getElementById("mentor-name-profile");
let category = document.getElementById("category-profile");

// vai receber o id do mentor
mentorName.textContent = mentores[0].name
category.textContent = mentores[0].category