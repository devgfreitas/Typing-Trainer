let header = document.getElementById('header');

document.addEventListener('mouseover', function(event) {
    if(event.target.closest('.header')) {
        header.style.animation = 'slide 1s linear';
        header.style.transform = 'translateX(0)';
        document.addEventListener('animationend', function() {
            header.style.animation = '';
        });
        document.addEventListener('mouseout', function() {
            header.style.animation = 'slideOut 1s linear';
            header.style.transform = 'translateX(85%)';
        });
    }
})