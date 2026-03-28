// ===== HAMBURGER MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // Close nav when a link is clicked (mobile)
    var navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          nav.classList.remove('open');
        }
      });
    });
  }

  // ===== GALLERY CAROUSEL =====
  var carousels = document.querySelectorAll('.gallery-carousel');
  carousels.forEach(function (carousel) {
    var grid = carousel.querySelector('.gallery-grid');
    var images = grid.querySelectorAll('img');
    var prevBtn = carousel.querySelector('.gallery-prev');
    var nextBtn = carousel.querySelector('.gallery-next');
    var currentIndex = 0;

    function scrollToImage(index) {
      if (images.length === 0) return;
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;
      currentIndex = index;
      images[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        scrollToImage(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        scrollToImage(currentIndex + 1);
      });
    }
  });

  // ===== LIGHTBOX =====
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    // Open lightbox when gallery image clicked
    var galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== CONTACT FORM HANDLING =====
  var forms = document.querySelectorAll('.contact-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(form);
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  });
});
