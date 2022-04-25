const links = document.querySelectorAll("nav a");

function abreLink(teste){
    let link = document.location.href;
    let certo = teste.href === link;

    if(certo){
        teste.style.backgroundColor = "black";
        teste.style.color = "white";
    }
    
}

links.forEach(abreLink);