

// OCULTAR O MENU

var header = document.querySelector(".header-desktop");
var is_mobile;
function ismobile(){
  return window.innerWidth <= 768
}
is_mobile = ismobile();
console.log(is_mobile);
if(is_mobile == false){
  window.addEventListener("scroll", onScroll);
}
function onScroll() {
  let section = document.getElementById("tecnologias");
  let sectionTop = section.offsetTop;
  let scrollPosition = window.scrollY;

  if (scrollPosition >= sectionTop) {
    header.style.display = "none";
  
  }else {
     header.style.display = "block"; }
}




// var debouncedOnScroll = debounce(onScroll, 50);
// window.addEventListener("scroll", debouncedOnScroll);

// function debounce(fn, delay) {
//   var timer = null;

//   return function () {
//     var context = this,
//       args = arguments;
//     clearTimeout(timer);

//     timer = setTimeout(function () {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

/*  DESCOBRIR ALTURA SECTION SOBRE  */

const sectionSobre = document.getElementById("sobre");

const alturaSection = sectionSobre.offsetTop;

console.log("Altura section sobre: ", alturaSection);

/* ANIMAÇÃO PARA EXIBIR TITULOS DAS SECTION */

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const elementos = document.querySelectorAll(".hidden");
elementos.forEach((element) => myObserver.observe(element));

/* ANIMAÇÃO MENU - SCROLL   */
let links = document.querySelectorAll(".js-link");
let sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 120;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute("id");

    if (top >= offset && top < offset + heightSection) {
      links.forEach((link) => {
        link.classList.remove("actived");
        document
          .querySelector(`header nav ul li a[href*='${idSection}']`)
          .classList.add("actived");
      });
    }
  });
});

/* ANIMAÇÃO PARA FECHAR O MENU - MOBILE APÓS CLICAR EM ALGUMA DAS OPÇÕES  */

function scrollSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  console.log("Section atual: ", section);
var alturaMenu = document.querySelector(".menu-mobile");


  if (href == "#inicio") {
    let topSection = 0;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
       setTimeout(() => {
      alturaMenu.style.height = 0;
      document.getElementById("btn-menu").classList.remove("ativo");
      img_menu_hamburguer.src =
        "./imgs/front-end/menu-icos/menu - hamburguer.svg";
    }, 500);
  } 
  
  

  else if (href == "#serviços") {
    let topSection = section.offsetTop - 80;
    window.scrollTo({
      top: topSection,
      behavior: "smooth",
    });
       setTimeout(() => {
      alturaMenu.style.height = 0;
      document.getElementById("btn-menu").classList.remove("ativo");
      img_menu_hamburguer.src =
        "./imgs/front-end/menu-icos/menu - hamburguer.svg";
    }, 500);
  } 
  
  
  else {
    let topSection = section.offsetTop;
    
    window.scrollTo({
      top: topSection,
      behavior: "smooth",
    });

    setTimeout(() => {
      alturaMenu.style.height = 0;
      document.getElementById("btn-menu").classList.remove("ativo");
      img_menu_hamburguer.src =
        "./imgs/front-end/menu-icos/menu - hamburguer.svg";
    }, 500);
  }


    console.log("altura", topSection);



    




  }


links.forEach((link) => {
  link.addEventListener("click", scrollSection);
});


// ANIMAÇÃO MENU HAMBURGUER
const btn_menu = document.getElementById("btn-menu");
const img_menu_hamburguer = document.getElementById("menu-hamburguer-img");
const ativar_menu = () => {
  if (btn_menu.classList.toggle("ativo") == true) {
    img_menu_hamburguer.src = "./imgs/front-end/menu-icos/menu-close.svg";
    document.querySelector(".menu-mobile").style.height = "250px";
  } else {
    img_menu_hamburguer.src =
      "./imgs/front-end/menu-icos/menu - hamburguer.svg";
    document.querySelector(".menu-mobile").style.height = 0;
  }
};

/* ANIMAÇÃO DE DIMINUIR O MENU */
var resolucao = window.screen.width;
var navMenu = document.querySelector(".navMenu");
var menuTamanhoMaior = "120px";
var menuTamanhoMaior768p = "100px";
var menuTamanhoMenor = "80px";
var tamanhoMenu = navMenu.offsetHeight;
console.log(tamanhoMenu);
window.addEventListener("scroll", () => {
  let x = window.scrollY;
  console.log(x);
  if (x >= 200) {
    navMenu.style.height = menuTamanhoMenor;
    console.log(navMenu.style.height);
  } else {
    navMenu.style.height = tamanhoMenu + "px";
  }
});

/* ANIMAÇÃO DE DIMINUIR O MENU - QUANDO MUDAR A RESOLUÇÃO*/

window.addEventListener("resize", () => {
  var resolucao = window.screen.width;

  if (resolucao > 1366) {
    console.log(resolucao);
    navMenu.style.height = "120px";
  } else if (resolucao <= 1366) {
    navMenu.style.height = "100px";
  }

  window.addEventListener("scroll", () => {
    let x = window.scrollY;
    console.log(x);
    if (x >= 200) {
      navMenu.style.height = menuTamanhoMenor;
    } else if (x < 200 && resolucao > 1366) {
      navMenu.style.height = menuTamanhoMaior;
    } else {
      navMenu.style.height = menuTamanhoMaior768p;
    }
  });
});

// ANIMAÇÃO DE DIGITAÇÃO SLOGAN

//texto que sera digitao e apagado
const texto_apresentação = "Seu site, sua cara, nosso talento!";

//Função para escrever o texto
function escrever(texto, elemento) {
  //Cria um array com o texto invertido
  const texto_reverso_array = texto.split("").reverse();

  const intervalo_digitação = setInterval(() => {
    //verifica se o array com o texto invertido está vazio
    if (texto_reverso_array.length == "") {
      clearInterval(intervalo_digitação); // limpa o intervalo
      setTimeout(apagar, 1000);
      return;
    }
    //Pega o ultimo elemento do array invertido, exibe na tela e remove
    const proxima_letra = texto_reverso_array.pop();
    elemento.innerHTML += proxima_letra;
  }, 90);
}

//Função para apagar o texto

function apagar() {
  const elemento = document.getElementById("titulo-apresentação");
  const texto_separado_array = elemento.innerHTML.split("");
  const deletar = setInterval(() => {
    if (!texto_separado_array.length) {
      clearInterval(deletar);
      escrever(texto_apresentação, elemento);
      return;
    }
    texto_separado_array.pop();
    elemento.innerHTML = texto_separado_array.join("");
  }, 50);
}

//Inicio da função
escrever(texto_apresentação, document.getElementById("titulo-apresentação"));
