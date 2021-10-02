// Carne - 400 g por pessoa / + de 6 horas 650 g
// Cerveja - 1200 ml por pessoa / + 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa / + 6 horas - 1500ml

// Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("result");


function calcular(){

    let qtdAdultos = inputAdultos.value;
    let qtdCriancas =  inputCriancas.value;
    let qtdDuracao = inputDuracao.value;


    let qtdCarne = ((qtdAdultos * carnePorPessoa(qtdDuracao)) + (qtdCriancas * (carnePorPessoa(qtdDuracao)/2))) / 1000;
    let qtdCerveja = (qtdAdultos * cervejaPorPessoa(qtdDuracao)) / 350;
    let qtdBebidas = ((qtdAdultos * bebidasPorPessoa(qtdDuracao)) + (qtdCriancas * (bebidasPorPessoa(qtdDuracao)/2))) / 2000;
    
    
    resultado.innerHTML = `<p><b>Você vai precisar de:</b></p>`;
    resultado.innerHTML += `<p><img src="./styles/images/beef.png" alt="icone-carne" width="22px" align="center"> &nbsp ${Math.ceil(qtdCarne)} kg de carne</p>`;
    resultado.innerHTML += `<p><img src="./styles/images/beer.png" alt="icone-cerveja" width="22px" align="center"> &nbsp ${Math.ceil(qtdCerveja)} latas de Cerveja (350ml)</p>`;
    resultado.innerHTML += `<p><img src="./styles/images/juice.png" alt="icone-suco" width="22px" align="center"> &nbsp ${Math.ceil(qtdBebidas)} garrafa(s) de bebida (2L)</p>`;
}


function carnePorPessoa(qtdDuracao){

    if(qtdDuracao <= 5){
        return 400;
    }
    else {
        return 650;
    }

}

function cervejaPorPessoa(qtdDuracao){

    if(qtdDuracao <= 5){
        return 1200;
    }
    else{
        return 2000;
    }

}

function bebidasPorPessoa(qtdDuracao){

    if(qtdDuracao <=5 ){
        return 1000;
    }
    else{
        return 1500;
    }

}