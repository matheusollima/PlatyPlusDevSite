function efeitoOver(obj){
    id = obj
   elemento = document.getElementById(id);
   elemento.style.opacity = 1
   elemento.style.backgroundColor = "rgb(38, 245, 38)";
   

}

function sairOver(obj){
    id = obj
   elemento = document.getElementById(id);
   
   elemento.style.backgroundColor = " rgb(0, 0, 0, 0.0)"
   
}

function alertMsg() {
    alert("Olá, mundo");
}



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
