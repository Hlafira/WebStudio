(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        body: document.querySelector('body')

    };

    refs.openMenuBtn.addEventListener('click', openMenu);
    refs.closeMenuBtn.addEventListener('click', openMenu);

    function openMenu() {
        const expanded =
            refs.openMenuBtn.getAttribute("aria-expanded") === "true" || false;
        
        refs.openMenuBtn.classList.toggle('is-open');
        refs.menu.classList.toggle('is-open');
        refs.openMenuBtn.setAttribute("aria-expanded", !expanded);
        refs.body.classList.toggle('modal-open');
    }
})();