let header = document.getElementById('header');
let main = document.getElementById('main');

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

