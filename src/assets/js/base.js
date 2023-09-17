const urlStr = location.href.split('/').splice(-1)[0]
export const isHomePage = urlStr === "index.html" || urlStr === ""

if(isHomePage) {
    const dashboard = document.querySelector('#dashboard');
    const topbar = document.querySelector('.topbar')
    const sidebarToggle = topbar.querySelector('#sidebarToggle')
    const main = document.querySelector('.main')
    const body = document.querySelector('body')
    const searchForm = topbar.querySelector('.topbar__search__form')

    dashboard.addEventListener('click', (e) => {
        if(e.target === sidebarToggle) displaySidebar();
    });
    const displaySidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('sidebar-hidden');
        sidebarToggle.classList.toggle('fa-bars')
        sidebarToggle.classList.toggle('fa-close')
        // adjust main overlay when sidebar is open for small and medium screen
        main.classList.toggle('main-overlay') 
        // adjust body scrolling when sidebar is open for small and medium screen
        body.classList.toggle('no-scroll')         
    }
    searchForm.addEventListener('submit', (e) => {
       e.preventDefault(); 
    }) 
}

// Footer Menu
document.querySelectorAll(".footer__menu__list__item__link").forEach((link) => {
    if (link.href === window.location.href) {
        link.closest('.footer__menu__list__item').classList.add("footer__menu__list__item-active");
    }
});
// Topbar Menu
document.querySelectorAll(".topbar__left__page").forEach((link) => {
    if (link.href === window.location.href) link.classList.add("topbar__left__page-active");
});
