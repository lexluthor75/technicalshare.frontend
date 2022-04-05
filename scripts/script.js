document.addEventListener("DOMContentLoaded", ()=>{
    showMentors()
  })
  
  // array de mentores
  let mentores = [
    {
      nome: "Larissa Orikava",
      areaInteresse: "UX Design",
    },
    {
      nome: "Luiz Nola",
      areaInteresse: "Desenvolvimento Fullstack",
    },
    {
      nome: "Guilherme Silva",
      areaInteresse: "Marketing",
    },
    {
      nome: "Mariana Mendanha",
      areaInteresse: "Marketing",
    },
  ];
  
  // selecionar todos os cards a partir das classes
  let nomesMentores = document.getElementsByClassName("nomesMentores");
  let categorias = document.getElementsByClassName("categorias");
  
  
  function createCard(id) {
    // área onde mostrará os mentores
    let content = document.querySelector(".conteudo");
    //card
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    content.appendChild(card);
  
    // imagem do mentor dentro do card
    let image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", "../assets/user.svg");
    card.appendChild(image);
  
    // card body
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    card.appendChild(cardBody);
  
    // nome do mentor
    let nomeMentor = document.createElement("h2");
    nomeMentor.setAttribute("class", "card-title");
    nomeMentor.textContent = mentores[id].nome;
    cardBody.appendChild(nomeMentor);
  
    // area de interesse
    let areaDeInteresse = document.createElement("p");
    areaDeInteresse.setAttribute("class", "card-text");
    areaDeInteresse.textContent = mentores[id].areaInteresse;
    cardBody.appendChild(areaDeInteresse);
  }
  
  
  // função para inicializar a área de mentores na área de destaque
  // nesse primeiro momento pega os 4 primeiros registrados no DB
  function showMentors() {
    for(let i = 0; i<4; i++){
      createCard(i)
    }
  }