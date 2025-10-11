const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const toggleLabel = document.querySelector('.toggle-label');


function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark-mode');
    toggleLabel.textContent = '🌙 Dark Mode';
  } else {
    body.classList.remove('dark-mode');
    toggleLabel.textContent = '🌞 Light Mode';
  }
}


const savedTheme = localStorage.getItem('theme');
const isDark = savedTheme === 'dark';
setTheme(isDark);
themeToggle.checked = isDark;


themeToggle.addEventListener('change', () => {
  const newIsDark = themeToggle.checked;
  setTheme(newIsDark);
  localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
