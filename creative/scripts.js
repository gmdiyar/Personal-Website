const container = document.querySelector('#image-container');

container.addEventListener('wheel', (e) => {
  e.preventDefault();
  const direction = e.deltaY > 0 ? 1 : -1;
  container.scrollBy({
    left: direction * window.innerWidth,
    behavior: 'smooth'
  });
});