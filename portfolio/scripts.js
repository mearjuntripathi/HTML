//
// Scripts
// 

console.log("   _____                  __                   ___________          .__                      __    .__      .__ ");
console.log("  /  _  \\   _______      |__|  __ __    ____   \\__    ___/ _______  |__| ______   _____    _/  |_  |  |__   |__|");
console.log(" /  /_\\  \\  \\_  __ \\     |  | |  |  \\  /    \\    |    |    \\_  __ \\ |  | \\____ \\  \\__  \\   \\   __\\ |  |  \\  |  |");
console.log("/    |    \\  |  | \\/     |  | |  |  / |   |  \\   |    |     |  | \\/ |  | |  |_> >  / __ \\_  |  |   |   Y  \\ |  |");
console.log("\\____|__  /  |__|    /\\__|  | |____/  |___|  /   |____|     |__|    |__| |   __/  (____  /  |__|   |___|  / |__|");
console.log("        \\/           \\______|              \\/                            |__|          \\/               \\/      ");

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
