document.addEventListener('DOMContentLoaded', () => {
  console.log('Cyber portfolio loaded.');
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('mouseover', () => link.classList.add('glow'));
    link.addEventListener('mouseout', () => link.classList.remove('glow'));
  });
});