let button = document.querySelector('.button');
let div = document.querySelector('.div');
let valor = div.innerText; 



function Somar(){

    if(valor < 9){
        valor++;
        div.innerText = valor;
    }
    else{
        console.log("Erro: valor podem ser adicionado se total for menor que dez(10) !");
    }
}

if(button){
    button.addEventListener('click', Somar);
}
else{
    console.log("Button doesn't exist...");
}
