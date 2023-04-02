const carrosel = document.querySelector('.carrosel-slide');
const carroselItens = document.querySelector('.itens');

let scrollPos = 0;
let currentIndex = 0;

carroselItens.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

function scrollToIndex(index) {
  currentIndex = index;
  scrollPos = currentIndex * -100;
  carrosel.style.transform = `translateX(${scrollPos}%)`;
}

function next() {
  if (currentIndex < carroselItens.length - 1) {
    scrollToIndex(currentIndex + 1);
  }
}

function prev() {
  if (currentIndex > 0) {
    scrollToIndex(currentIndex - 1);
  }
}

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);