/*Mensagem de Bom dia/tarde/noite 

function msgDia(){
    const tempoAtual = new Date();
    const horaAtual = tempoAtual.getHours();
    
    if(horaAtual>=18 && horaAtual<5){
        document.getElementById("msgDia").innerHTML = "Boa noite";
    }else if(horaAtual>=5 && horaAtual<=12){
        document.getElementById("msgDia").innerHTML = "Bom dia";
    }else if(horaAtual>12 && horaAtual<18){
        document.getElementById("msgDia").innerHTML = "Boa tarde";
    }
     
}
msgDia();

*/




var header = document.querySelector('header');
var isHeaderHidden = false;
var i = 0;

function onScroll() {
  if (window.scrollY > 2591 && !isHeaderHidden) {
    header.style.opacity = "0";
    isHeaderHidden = true;
    i = ++i;
    console.log("o valor do contador é " + i);
  } else if (window.scrollY <= 2591 && isHeaderHidden) {
    header.style.opacity = "1";
    isHeaderHidden = false;
    i = ++i;
    console.log("o valor do contador é " + i);
  }
  

}

onScroll();

window.addEventListener('scroll', onScroll);




var debouncedOnScroll = debounce(onScroll, 50);
window.addEventListener('scroll', debouncedOnScroll);

function debounce(fn, delay) {
  var timer = null;

  return function() {
    var context = this, args = arguments;
    clearTimeout(timer);
    
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

/* ANIMAÇÃO PARA EXIBIR TITULOS DAS SECTION */ 

const myObserver = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
      if(entry.isIntersecting){
          entry.target.classList.add('show')
      } else{
          entry.target.classList.remove('show')     
      }
  })
  
})
const elementos = document.querySelectorAll('.hidden')
elementos.forEach((element) => myObserver.observe(element) )


/* ANIMAÇÃO MENU - SCROLL   */
 let links = document.querySelectorAll(".js-link");
 let sections = document.querySelectorAll(".section");

 window.addEventListener('scroll', () => {
   sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 120;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute('id');

     if(top >= offset && top < offset + heightSection){
      links.forEach(link => {
        link.classList.remove('actived');
        document.querySelector(`header nav ul li a[href*='${idSection}']`).classList.add('actived');
      })
     }

   })
 })


 /* ANIMAÇÃO DE CLIQUE  */

function scrollSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  let topSection = section.offsetTop - 60;

  window.scrollTo({
    top: topSection,
    behavior: 'smooth'
  })
}


/* ANIMAÇÃO DE DIMINUIR O MENU */
links.forEach(link => {
  link.addEventListener('click', scrollSection);
});



var menuTamanhoMaior = '120px';
var menuTamanhoMenor = '80px';
window.addEventListener('scroll', () => {
  let x = window.scrollY;
  let navMenu = document.querySelector('.navMenu');
  console.log(x);
  if(x>=200){
  
      navMenu.style.height = menuTamanhoMenor;
    
    
  } else{
   
      navMenu.style.height = menuTamanhoMaior;
   
  }
})



// ANIMAÇÃO MENU HAMBURGUER
const btn_menu = document.getElementById('btn-menu');
const img_menu_hamburguer = document.getElementById('menu-hamburguer-img');
const ativar_menu = () =>{
  if(btn_menu.classList.toggle('ativo') == true){
    img_menu_hamburguer.src = "./imgs/front-end/menu-icos/menu-close.svg"
  } else {
    img_menu_hamburguer.src = "./imgs/front-end/menu-icos/menu - hamburguer.svg"
  }
}
