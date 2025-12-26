function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='none'
}

// Product size and price update function
function updatePrice(size, price) {
  // Update net weight
  document.getElementById('netWeight').textContent = size;
  
  // Update MRP size label
  document.getElementById('mrpSize').textContent = size;
  
  // Update price
  document.getElementById('productPrice').textContent = `₹ ${price}.00`;
  
  // Update active button state
  const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(btn => {
    if (btn.textContent === size) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function() {
  // Create intersection observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all scroll-reveal elements
  const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-fade, .scroll-reveal-stagger');
  revealElements.forEach(el => {
    observer.observe(el);
  });

  // Stagger animation for grid items
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach(container => {
    const items = container.querySelectorAll('.scroll-reveal-stagger');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });
});
