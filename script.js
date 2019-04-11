function calculoIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = peso / (altura * altura)
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var gif;
    var text;
    var cssclass;
    console.log("O seu IMC é" + resultado.toFixed(2))

    if(resultado < 18){
        text = "Tá linda, linda!"
        gif = `<img src="https://media.giphy.com/media/MvZKiDJmB1XEs/giphy.gif">`;
        cssclass = "linha1";
    }
    else if(resultado >= 18 && resultado < 25){
        text = "Eita, delícia!"
        gif = `<img src="https://media.giphy.com/media/OJbr914LLiETe/giphy.gif">`;
        cssclass = "linha2";
    }
    else if(resultado >= 25 && resultado < 30){
        text = "UOU, que lindeza"
        gif = `<img src="https://media.giphy.com/media/73UW5Rfo2osRq/giphy.gif">`;
        cssclass = "linha2";
    }
    else if(resultado >= 30 && resultado < 40){
        text = "ícone sem defeitos"
        gif = `<img src="https://media.giphy.com/media/NG7fcCJpaC3Xq/giphy.gif">`;
        cssclass = "linha3";
    }
    else{
        text = "Ai, tô apaixonada"
        gif = `<img src="https://media.giphy.com/media/2bRl9YbY60FMs/giphy.gif ">`;
        cssclass = "linha4";
    }

    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
}
