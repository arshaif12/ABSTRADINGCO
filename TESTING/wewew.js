function scrollToSection(event) {
    event.preventDefault();
    
    const target = document.querySelector(event.target.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }