export function initCarousel() {
  const heroSection = document.querySelector('.hero-section');
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');

  if (!heroSection || !slides.length || !nextBtn || !prevBtn) {
    console.warn("Carousel: Element not found in DOM");
    return;
  }

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    if (index === 1) {
      heroSection.classList.add('bg-slide-2');
    } else {
      heroSection.classList.remove('bg-slide-2');
    }
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Tampilkan slide awal
  showSlide(currentIndex);
}
