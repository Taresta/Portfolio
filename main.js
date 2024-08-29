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

document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const modalID = this.getAttribute('data-modal');
        document.getElementById(modalID).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
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