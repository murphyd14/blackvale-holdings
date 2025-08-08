// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          navToggle.classList.remove("active");
        }
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.95)";
        navbar.style.backdropFilter = "blur(20px)";
      } else {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
        navbar.style.backdropFilter = "blur(20px)";
      }
    });
  }

  // Form submission handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitButton = this.querySelector(".submit-button");
      const originalText = submitButton.textContent;

      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
      submitButton.classList.add("loading");

      // Simulate API call
      setTimeout(() => {
        showNotification(
          "Thank you for your message. We will get back to you soon.",
          "success"
        );
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove("loading");
      }, 2000);
    });
  }

  // Initialize all elements as visible immediately (no animations on load)
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  });

  const cards = document.querySelectorAll(
    ".approach-card, .criteria-card, .portfolio-card"
  );
  cards.forEach((card) => {
    card.style.opacity = "1";
    card.style.transform = "scale(1)";
  });

  // Advanced hover effects for cards
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
      this.style.transition = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.transition = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });
  });

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".cta-button, .submit-button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Parallax effect for hero section
  const heroSection = document.getElementById("home");
  if (heroSection) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    });
  }

  // Keyboard navigation support
  document.addEventListener("keydown", function (e) {
    // Escape key closes mobile menu
    if (e.key === "Escape") {
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      }
    }
  });

  // Click outside to close mobile menu
  document.addEventListener("click", function (e) {
    if (navMenu && navMenu.classList.contains("active")) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      }
    }
  });

  // Preload critical images
  const criticalImages = ["/assets/BV_Logo.png", "/assets/BV_Icon.png"];
  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${
      type === "success" ? "#10B981" : type === "error" ? "#EF4444" : "#3B82F6"
    };
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    font-family: var(--font-sans);
    font-size: 0.9rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Lazy loading for images (if needed in the future)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  const lazyImages = document.querySelectorAll("img[data-src]");
  lazyImages.forEach((img) => imageObserver.observe(img));
}
