const galleryScroll = document.querySelector('.gallery-scroll');

if (galleryScroll) {
  // Use native scrolling (like .portfolio) — avoid intercepting wheel/pointer handlers
  // Keep smooth keyboard navigation for accessibility
  galleryScroll.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); this.scrollBy({ left: -400, behavior: 'smooth' }); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); this.scrollBy({ left: 400, behavior: 'smooth' }); }
  });
}

// Hover expand still handled, and add focus/blur for keyboard users
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => item.classList.add('expanded'));
    item.addEventListener('mouseleave', () => item.classList.remove('expanded'));
    item.addEventListener('focus', () => item.classList.add('expanded'));
    item.addEventListener('blur', () => item.classList.remove('expanded'));
});

document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");
  if (gallery) gallery.style.transform = "translateX(0)";
  // Make gallery items focusable for keyboard users
  document.querySelectorAll('.gallery-item').forEach(item => item.tabIndex = 0);
});