let nome = document.getElementById("mentorNome");
let areaInteresse = document.getElementById("areaInteresse");

let mentores = [
  {
    id: 1,
    nome: "Larissa Orikava",
    areasInteresse: "UX/Design",
  },
  {
    id: 2,
    nome: "Luiz Nola",
    areasInteresse: "Desenvolvimento Fullstack",
  },
];

nome.textContent = mentores[0].nome;
areaInteresse.textContent = mentores[0].areasInteresse;