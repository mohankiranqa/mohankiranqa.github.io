const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
if (menu) {
  menu.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? '' : 'flex';
    if (!open) {
      nav.style.position = 'absolute';
      nav.style.top = '70px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.padding = '18px 6vw';
      nav.style.background = 'rgba(245,244,239,.98)';
      nav.style.flexDirection = 'column';
      nav.style.gap = '16px';
    }
  });
}
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 850) nav.style.display = '';
}));
document.getElementById('year').textContent = new Date().getFullYear();
