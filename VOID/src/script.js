
const colors = ['red', 'green', 'blue', 'yellow'];
let currentIndex = 0;
const myElement = document.getElementById('nav a');

myElement.addEventListener('mouseenter', () => {
  myElement.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});
