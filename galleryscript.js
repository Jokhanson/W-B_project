const leftBtn = document.querySelector('.scroll-button.left');
const rightBtn = document.querySelector('.scroll-button.right');
const grid = document.querySelector('.portfolio-grid');

leftBtn.addEventListener('click', () => {
    grid.scrollBy({ left: -400, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    grid.scrollBy({ left: 400, behavior: 'smooth' });
});

// Make buttons respond to Enter/Space when focused
[leftBtn, rightBtn].forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

// Enable arrow-key scrolling when the grid is focused
grid.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    grid.scrollBy({ left: -400, behavior: 'smooth' });
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    grid.scrollBy({ left: 400, behavior: 'smooth' });
  }
});