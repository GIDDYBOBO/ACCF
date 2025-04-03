 // Simple script to make header sticky
 window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-container');
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(62, 39, 35, 0.9)';
      nav.style.padding = '10px 40px';
      nav.style.position = 'fixed';
      nav.style.top = '0';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.zIndex = '100';
      nav.style.backdropFilter = 'blur(10px)';
      nav.style.transition = 'all 0.3s ease';
    } else {
      nav.style.background = 'transparent';
      nav.style.position = 'relative';
      nav.style.padding = '20px 40px';
      nav.style.backdropFilter = 'none';
    }
  });
  
  // Form submission event
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Thank you! Your message has been received. May God bless you abundantly!");
      form.reset();
    });
  });