const group = document.querySelector(".group")
for (let i = 1; i < 25; i++) {
  const containerId = `iconContainer${i}`
  const container = document.createElement("div")
  container.className = "iconContainer"
  container.id = containerId
  group.appendChild(container)
  addIcons(containerId)
}

function addIcons(containerId) {
  const iconContainer = document.getElementById(containerId)
  const Unicode = [
    "\uf001", //musica
    "\uf1e2", //bomba
    "\uf0c2", //nuvem
    "\uf004", //coração
    "\uf005", //estrela
    "\uf118", //carinha feliz
    "\uf007", //boneco
    "\uf48b", //caminhao veloz
    "\uf6e2", //fantasma
    "\uf64f", //cidade
    "\uf206", //bicicleta
    "\uf578", //peixe
    "\uf013", //engrenagem
    "\uf06d", //fogo
    "\uf015", //casa
    "\uf188", //bug
    "\uf017", //relogio
    "\uf21b", //espiao
    "\uf11e", //bandeira quadriculada
    "\uf072", //avião
    "\uf0d6", //dinheiro
    "\uf084", //chave
    "\uf11b", //gamepad
    "\uf5e4", //carro
    "\uf135", //foguete
    "\uf21c", //moto
    "\uf5dc", //cerebro
    "\uf091", //trofeu
    "\uf544", //robo
    "\uf521", //coroa
    "\ue074", //virus
    "\uf63b", //monster truck
    "\uf51e", //moedas
    "\uf05b", //mira
    "\uf0eb", //lampada
    "\uf12e", //quebra-cabeça
    "\uf522", //dados
    "\uf5b6", //van
    "\uf45f", //bola de volei
    "\uf63c", //camioneta
    "\uf4df", //caminhao
    "\uf722", //trator
    "\uf45d", //tenis de mesa
    "\uf197", //aviao espacial
    "\uf753", //metero
    "\ue518", //jato
    "\uf533", //helicoptero
    "\ue19b", //arma
    "\uf1e3", //bola de futebol
    "\uf7ba", //radiacao
  ]

  for (let i = 0; i < 70; i++) {
    const icon = document.createElement("i")
    icon.className = "icon fas"
    icon.innerHTML = randomIcon(Unicode)
    iconContainer.appendChild(icon)
  }
}

// function to generate a random fontawesome unicode value
function randomIcon(values) {
  const randomIndex = Math.floor(Math.random() * values.length)
  return values[randomIndex]
}

let menu = document.querySelector(".menu-icon")
let navbar = document.querySelector(".menu")

menu.onclick = () => {
  navbar.classList.toggle("active")
  menu.classList.toggle("move")
  bell.classList.remove("active")
}

// Notfication
let bell = document.querySelector(".notification")

document.querySelector("#bell-icon").onclick = () => {
  bell.classList.toggle("active")
}

// Swipper
var swiper = new Swiper(".game-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
})
