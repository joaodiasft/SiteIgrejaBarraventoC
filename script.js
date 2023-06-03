//alertt

function exibirAlerta() {
  var alerta = document.getElementById("alerta");
  alerta.style.display = "block";
}

window.onload = exibirAlerta;
function fecharAlerta() {
  var alerta = document.getElementById("alerta");
  alerta.style.display = "none";
}

// fim alert


//navbar1
// Seleciona a navbar e a posição do scroll na página
const navbar = document.querySelector('.navbar');
const scrollPosition = window.scrollY;

// Adiciona a classe .sticky na navbar quando o scroll passa da posição da navbar
if (scrollPosition >= navbar.offsetTop) {
  navbar.classList.add('sticky');
} else {
  navbar.classList.remove('sticky');
}
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= navbar.offsetTop) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  //fim navbar1


  //parrte de proximo evento

  const proximoEvento = {
    nome: "Conferencia Edificados",
    data: "20/08/2023",
  };
  
  const eventoNome = document.getElementById("evento-nome");
  const eventoData = document.getElementById("evento-data");
  eventoNome.textContent = proximoEvento.nome;
  eventoData.textContent = `Data: ${proximoEvento.data}`;

  //fim deste parte acima


// carrosel
var testimonials = document.getElementById('testimonials');
var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');


control1.onclick=function(){
    testimonials.style.transform = "translateX(870px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}

control2.onclick=function(){
    testimonials.style.transform = "translateX(0px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
}

control3.onclick=function(){
    testimonials.style.transform = "translateX(-870px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
}




   // Aguarde até que o DOM esteja carregado
   document.addEventListener('DOMContentLoaded', function() {
    // Capturar elementos
    var menuToggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');

    // Adicionar evento de clique ao menu-toggle
    menuToggle.addEventListener('click', function() {
      // Alternar classe 'active' para mostrar/ocultar o menu
      navLinks.classList.toggle('active');
    });
  });