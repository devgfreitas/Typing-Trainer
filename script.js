let header = document.getElementById('header');
let main = document.getElementById('main');
let visor = document.getElementById('input-texto');


header.addEventListener('mouseenter', () => {
    header.style.transform = 'translateX(0)';
    header.style.transition = 'transform 1s ease';
    main.style.backgroundImage = 'linear-gradient(90deg, #595959 0%, #3D3C3C 75%, #FFFFFF 100%)';
})

header.addEventListener('mouseleave', () => {
    header.style.transform = 'translateX(85%)';
    header.style.transition = 'transform 1s ease';
    main.style.backgroundImage = 'linear-gradient(90deg, #595959 0%, #3D3C3C 94%, #FFFFFF 100%)';
});

function digitar(letra) {
    visor.value += letra;
}

function apagar() {
    visor.value = visor.value.slice(0, -1)
}

document.addEventListener('keydown', function(event) {
    let tecla = event.key;
    let botao = document.querySelector('[data-key="${tecla}"]');
    if(botao) {
        botao.classList.add('active');

        setTimeout( () => {
            botao.classList.remove('active');
        },100)
    }
})
