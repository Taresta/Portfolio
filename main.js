const navLinks = document.querySelectorAll('.navigation-list a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        //Prevent the default action
        event.preventDefault();

        //Get the target section id from the href attribute
        const targetID = this.getAttribute('href').substring(1);

        //Get the target section element
        const targetSection = document.getElementById(targetID);

        //Scroll to the target section smoothly
        targetSection.scrollIntoView({behavior: 'smooth'});

    });
});

// const navBar = document.querySelector('.navigation-list');
// const navBarOffset = navBar.offsetTop;
// window.addEventListener('scroll', () =>{
//     if (window.scrollY >= navBarOffset) {
//         navBar.classList.add('sticky');
//     }
//     else {
//         navBar.classList.remove('sticky');
//     }
// });