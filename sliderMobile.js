let items = document.querySelectorAll(".slider-mobile .item"); // Seleciona os itens do slider
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3; // Índice inicial do item ativo
let startX; // Posição inicial de arraste
let isDragging = false; // Controle para o estado de arraste

function loadShow() {
  let stt = 0;

  // Estilo do item ativo
  items[active].style.transform = "none";
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;

  // *************** LADO DIREITO *******************
  for (let i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${100 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(1px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  stt = 0;

  // *************** LADO ESQUERDO *******************
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-100 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(1px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

// Configura os botões de navegação
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};

// ** FUNÇÃO DE ARRASTE (DRAG) **

// Evento de início de arraste para mouse
document.querySelector(".slider-mobile").addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX; // Captura a posição inicial do clique
  document.querySelector(".slider-mobile").style.cursor = "grabbing"; // Atualiza o cursor
});

// Evento de movimento para mouse
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const delta = e.pageX - startX; // Calcula a distância arrastada
  if (delta > 50 && active > 0) {
    // Arrastando para a esquerda
    active--;
    loadShow();
    isDragging = false; // Finaliza arraste
    document.querySelector(".slider-mobile").style.cursor = "grab";
  } else if (delta < -50 && active < items.length - 1) {
    // Arrastando para a direita
    active++;
    loadShow();
    isDragging = false; // Finaliza arraste
    document.querySelector(".slider-mobile").style.cursor = "grab";
  }
});

// Finaliza o arraste para mouse
document.addEventListener("mouseup", () => {
  isDragging = false;
  document.querySelector(".slider-mobile").style.cursor = "grab";
});

document.addEventListener("mouseleave", () => {
  isDragging = false;
  document.querySelector(".slider-mobile").style.cursor = "grab";
});

// Evento de início de arraste para dispositivos móveis
document.querySelector(".slider-mobile").addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX; // Captura a posição inicial do toque
});

// Evento de movimento para dispositivos móveis
document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const delta = e.touches[0].pageX - startX; // Calcula a distância arrastada
  if (delta > 50 && active > 0) {
    // Arrastando para a esquerda
    active--;
    loadShow();
    isDragging = false; // Finaliza arraste
  } else if (delta < -50 && active < items.length - 1) {
    // Arrastando para a direita
    active++;
    loadShow();
    isDragging = false; // Finaliza arraste
  }
});

// Finaliza o arraste para dispositivos móveis
document.addEventListener("touchend", () => {
  isDragging = false;
});

// Bloqueia o menu contextual nas imagens
document.querySelectorAll(".item-container img").forEach((img) => {
  img.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Impede o menu padrão
  });

  // Bloqueia o toque longo em dispositivos móveis
  img.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Impede o comportamento padrão
  });
});

// Carrega a exibição inicial
loadShow();

// FUNÇÃO CLIQUE DOS ITEMS DO PAINEL SERVIÇOS

let slider = document.querySelector(".slider-mobile");
document.addEventListener("click", function (event) {
  if (!slider.contains(event.target)) {
    const servicos = document.querySelectorAll(".serviço-texto");
    console.log(typeof servicos);
    servicos.forEach(function (servico) {
      if (servico.classList.contains("ativo")) {
        servico.classList.remove("ativo");
      }
    });
  }
});

items.forEach(function (item) {
  item.addEventListener("click", function () {
    const servico = item.querySelector(".serviço-texto");
    servico.classList.add("ativo");
  });
});

items.forEach(function (item) {
  const servico = item.querySelector(".serviço-texto");

  if (servico) {
    console.log("teste", servico);
    servico.addEventListener("click", function () {
      event.stopPropagation();
      if (servico.classList.contains("ativo")) {
        servico.classList.remove("ativo");
      }
    });
  }
});

let item_menu = document.querySelectorAll(".botao-menu");
item_menu.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let elemento = e.target;
    let href_elemento = elemento.getAttribute("href");
    console.log(href_elemento);
    let section = document.getElementById(href_elemento.slice(1));
    let topo_section = section.offsetTop;
    let altura_menu = window.innerHeight * 0.12;
    let scrollPara = topo_section - altura_menu;
    console.log('rolar para', scrollPara);
    window.scrollTo({
      top: scrollPara,
      behavior: "smooth",
    });
  });
});
