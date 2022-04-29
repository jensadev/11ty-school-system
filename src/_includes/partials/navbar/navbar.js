window.addEventListener('load', (event) => {
    const collapse = document.querySelector('.navbar__collapse');
    const button = document.querySelector('.navbar__toggle');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        collapse.classList.toggle('navbar__collapse-show');
    }, false);

    const mql = window.matchMedia('(max-width: 80ch)');
    mql.addEventListener('change', (e) => {
        if (!e.matches && collapse.classList[1] == 'navbar__collapse-show') {
            collapse.classList.toggle('navbar__collapse-show');
        }
    })

    const toggle = document.querySelector('.nav__link--dropdown-toggle');
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
    });
});