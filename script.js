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