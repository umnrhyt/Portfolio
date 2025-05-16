//umnrhyt javascripts


//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Portfolio section - Modal


//Our clients - Swiper


//Website dark/light theme


//Scroll to top button


//Navigation menu items active on page scroll


//Responsive navigation menu toggle


//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right'});
ScrollReveal().reveal('.about .profesional-list li', { delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', { delay: 700, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200});
