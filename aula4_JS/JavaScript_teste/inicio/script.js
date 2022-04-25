function criaObjecto(nome, ano, autor){
    const maisc = nome.toUpperCase();
    const data = 2022 - ano;
    const variavel = nome + ' por ' + autor;

    return {
        nome: maisc,
        ano: data,
        autor: variavel
    }

}

let resultado = criaObjecto('O Senhor dos Anéis', 1954, 'J. R. R. TOLKIEN');
console.log(resultado);




function ativarButton(){
    console.log("clicado no elemento: ", ativa);
}

let ativa = document.querySelector('.ativar');

ativa.addEventListener('click', ativarButton);

function coordenadaMouse(event) {
    const coordernadas = {
        x: event.x,
        y: event.y,
    };
    console.log(coordernadas)
}

window.addEventListener("mousemove", coordenadaMouse);

