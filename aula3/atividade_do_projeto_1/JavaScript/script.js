
// Ativar Links

let links = document.querySelectorAll(".menus > .menu a");


function abrirLink(link){
    const url = window.location.href;
    let href = link.href;


    if(url.includes(href)){
        console.log(href);
        link.classList.add('ativo');
    }
}

links.forEach(abrirLink);



// Puxar item do produto

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }

    console.log(parametro);
}

parametros.forEach(ativarProduto);

