let nomeTimeA = prompt("Insira o nome do primeiro time");
let nomeTimeB = prompt("Insira o nome do segundo time");
let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;
const timeA_HTML = document.getElementById("nomeTimeA");
const timeB_HTML = document.getElementById("nomeTimeB");
const pontoA_HTML = document.getElementById("pontuacaoA");
const pontoB_HTML = document.getElementById("pontuacaoB");
const image_HTML = document.getElementById("marca");
const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");

timeA_HTML.innerText = nomeTimeA;
timeB_HTML.innerText = nomeTimeB;

pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;
setB_HTML.innerText = setB;

pontoA_HTML.addEventListener("click", aoClicarEmPontoA);
pontoB_HTML.addEventListener("click", aoClicarEmPontoB);
image_HTML.addEventListener("click", function(){ //function anonima
    pontoA = 0;
    pontoB = 0;
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;
});

function aoClicarEmPontoA() {
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA; // insere o valor de pontoA no HTML
    // alert(`O time ${nomeTimeA} fez ${pontoA} pontos.`);
}
function aoClicarEmPontoB () {
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
}

function resetThePoints (){
    pontoA = 0;
    pontoB = 0;
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;
};

function winnerVerify (){
    if (pontoA >=21) {
        setA = setA + 1
        setA_HTML.innerText = setA
        alert(`${nomeTimeA} ganhou o set!`)
    
    }
}

 // aqui só acontece a declaração da função, para usarmos chamamos o nome que definimos, como se pode perceber abaixo:

