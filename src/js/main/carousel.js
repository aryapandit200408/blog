document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');
    const dotsNav = carousel.querySelector('.carousel-dots');

    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      if (index === 0) dot.classList.add('active');
      dotsNav.appendChild(dot);
    });

    const dots = Array.from(dotsNav.children);

    function updateCarousel(index) {
      track.style.transform = `translateX(-${index * 100}%)`;

      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');

      currentIndex = index;
    }

    nextBtn.addEventListener('click', () => {
      updateCarousel((currentIndex + 1) % slides.length);
    });

    prevBtn.addEventListener('click', () => {
      updateCarousel((currentIndex - 1 + slides.length) % slides.length);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => updateCarousel(index));
    });
  });
});