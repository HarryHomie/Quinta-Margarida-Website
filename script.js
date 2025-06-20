// Fade-in animation on scroll
// Additional animations for enhanced interactivity

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  faders.forEach(fade => {
    appearOnScroll.observe(fade);
  });

  // Animate header title
  const headerTitle = document.querySelector('header h1');
  if (headerTitle) {
    headerTitle.style.opacity = '0';
    headerTitle.style.transform = 'translateY(-30px)';
    setTimeout(() => {
      headerTitle.style.transition = 'all 1s ease';
      headerTitle.style.opacity = '1';
      headerTitle.style.transform = 'translateY(0)';
    }, 300);
  }

  // Bounce effect on features
  const features = document.querySelectorAll('.feature');
  features.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'scale(0.9)';
    setTimeout(() => {
      el.style.transition = 'all 0.6s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'scale(1)';
    }, 400 + i * 200);
  });

  // Booking links slide-in effect
  const bookingLinks = document.querySelectorAll('.booking-links a');
  bookingLinks.forEach((link, i) => {
    link.style.opacity = '0';
    link.style.transform = 'translateX(40px)';
    setTimeout(() => {
      link.style.transition = 'all 0.6s ease-out';
      link.style.opacity = '1';
      link.style.transform = 'translateX(0)';
    }, 600 + i * 200);
  });
});
