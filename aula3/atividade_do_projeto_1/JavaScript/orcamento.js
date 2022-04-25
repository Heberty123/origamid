let bicraft_container = document.querySelector('.bikcraft-container');
let seguros_container = document.querySelector('.seguro-container');

document.querySelector('.bikcraft').onclick = function() {
    if ( this.checked ) {
        seguros_container.classList.remove("container_block");
        bicraft_container.classList.add('container_block');
    } else {
        alert("Não foi checado");
    }
};

document.querySelector('.seguro').onclick = function() {
    if ( this.checked ) {
        bicraft_container.classList.remove('container_block');
        seguros_container.classList.add('container_block')
    } else {
        alert("Não foi checado");
    }
};




//////////////////////////////////////////////////////////////////////////////////

let nimbus = document.getElementById('nimbus');
let magic = document.querySelector('.magic');
let nebula = document.querySelector('.nebula');

let prata = document.getElementById('prata');
let ouro = document.getElementById('ouro');

let prata_seguro = document.querySelector('.prata-seguro');
let ouro_seguro = document.querySelector('.ouro-seguro');

let prata_after = document.querySelector('.prata-seguro::after')
let ouro_after = document.querySelector('.ouro-seguro::after')

let nimbus_stark = document.getElementById('nimbus_stark');
let magic_might = document.getElementById('magic_might');
let nebula_cosmic = document.getElementById('nebula_cosmic');

let box_escolhida_nimbus = document.querySelector('.box-nimbus');
let box_escolhida_magic = document.querySelector('.box-magic');
let box_escolhida_nebula = document.querySelector('.box-nebula');


prata.onclick = function() {
    prata_seguro.classList.add('class-white-title');
    ouro_seguro.classList.remove('class-white-title');
};

ouro.onclick = function() {
    ouro_seguro.classList.add('class-white-title');
    prata_seguro.classList.remove('class-white-title');
};



nimbus_stark.onclick = function() {

        
        box_escolhida_nebula.classList.remove('box-escolhida-block');
        box_escolhida_magic.classList.remove('box-escolhida-block');
        box_escolhida_nimbus.classList.add('box-escolhida-block');
        nimbus.classList.add('class-white-title');
        magic.classList.remove('class-white-title')
        nebula.classList.remove('class-white-title')
};


magic_might.onclick = function() {
    
    box_escolhida_nebula.classList.remove('box-escolhida-block');
    box_escolhida_nimbus.classList.remove('box-escolhida-block')
    box_escolhida_magic.classList.add('box-escolhida-block');
    nimbus.classList.remove('class-white-title');
    magic.classList.add('class-white-title')
    nebula.classList.remove('class-white-title')

};

nebula_cosmic.onclick = function() {
    
    box_escolhida_nimbus.classList.remove('box-escolhida-block')
    box_escolhida_magic.classList.remove('box-escolhida-block');
    box_escolhida_nebula.classList.add('box-escolhida-block');
    nimbus.classList.remove('class-white-title');
    magic.classList.remove('class-white-title')
    nebula.classList.add('class-white-title')
};