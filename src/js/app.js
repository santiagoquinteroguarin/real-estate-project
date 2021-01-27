// que el documento este cargado tanto HTML y CSS
document.addEventListener('DOMContentLoaded', function() {

    // ? 1.
    eventListeners();

    // ? 1.
    darkMode();
});

function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // console.log(prefiereDarkMode.matches);

    if(prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function() {
        if(prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // ? 2.
    const botonDarkMode = document.querySelector('.dark-mode-button');
    botonDarkMode.addEventListener('click', function() {
        // ? agregar al body toggle --> si la tiene la clase la quita y sino la tiene la agrega
        document.body.classList.toggle('dark-mode');
    });
}

// ? 2.
function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegationResponsive);
}

// ? 3.
function navegationResponsive() {
    const navegacion = document.querySelector('.navigation');
    // ? toggle --> si la tiene la clase la quita y sino la tiene la agrega
    navegacion.classList.toggle('show');
}