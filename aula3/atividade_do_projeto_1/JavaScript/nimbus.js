const imagens = document.querySelectorAll(".box-imgs img");
const imagem_principal = document.querySelector(".imagem-principal");
const h1 = document.querySelector(".conteudo > h1");
const preco = document.querySelector(".conteudo > p");
const p = document.querySelector(".descricao > p");


function trocarImagem(imagem){



    imagem.addEventListener("click", y => {

        let aux_src = imagem_principal.src;
        let aux_alt = imagem_principal.alt;

        imagem_principal.src = imagem.src;
        imagem_principal.alt = imagem.alt;

        console.log("Você trocou para bicicleta " + imagem.src);

        if(imagem.alt === "nimbus1"){
            h1.innerHTML = `Nimbus Stark<span class="dot-yellow">.</span>`;
            preco.innerText = "R$ 4999"
            p.innerText = `A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.`
        }

        else if(imagem.alt === "nimbus2"){
            h1.innerHTML = `Magic Might<span class="dot-yellow">.</span>`;
            preco.innerText = "R$ 3999"
            p.innerText = `AA Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.`
        }
        else{
            h1.innerHTML = `Nebula Cosmic<span class="dot-yellow">.</span>`;
            preco.innerText = "R$ 5999"
            p.innerText = `A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.`
        }

        imagem.src = aux_src;
        imagem.alt = aux_alt;
    });
}




imagens.forEach(trocarImagem);