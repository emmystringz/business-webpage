//nav menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('active');


//transform toggle button to x

const spans = navToggle.querySelectorAll('span');
if (navMenu.classList.contains('active')){
    spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(45deg) translate(-5px, 6px)';
}else{
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}
});

//close menu when clicking a link

export const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(Link => {
    Link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

//change header style on scroll

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});

//active highlighting
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(LInk => {
        link.classList.remove('active');
        if (lInk.getAttribute('href') === `#${current}` ) {
        link.classList.add('active');
    }
});
});

//testimonial

const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotContainer = document.getElementById('dots');
let currentSlide = 0;

//create dots

testimonialSlides.forEach((_, index) =>{
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        showSlide(index);
    });
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dots');

function showSlide(index) {
    if (index < 0)index = testimonialSlides.length - 1;
    if (index >= testimonialSlides.length) index = 0;

    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');

    });

    dots.forEach(dot => {
        dots.classList.remove('active');

    });

    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
};

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

//initial show
showSlide(0);

//auto slide
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

//contact form

const contactForm = document.getElementById('contactForm');
const formSuccess= document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            //in areal app you will send the form data to server here
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';

            //reset form after 5sec
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
            }, 5000);
        });

    //newsletter form

    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) =>{
            e.preventDefault();
            //in areal app you will send the email to a server here

            const input = newsletterForm.querySelector('input');
            const originalValue = input.value;
            input.value = 'subscribed!';
            input.disabled = true;

            //reset after 3 seconds

            setTimeout(() => {
            input.value = '';
            input.disabled = 'false';
            newsletterForm.reset();     
        }, 3000);
    });

}

//animation on scroll

const animationOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .work-item, .about-image, .about-text');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = innerHeight;
        if (elementPosition < windowHeight - 100){
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

//add initial styles for animation
document.querySelectorAll('.service-card, .work-item, .about-image, .about-text');
elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

//run animation on scroll 

window.addEventListener('scroll', animationOnScroll);
//run on initial load
window.addEventListener('load', animationOnScroll);