import './style.css';

const list = document.querySelectorAll('li');

for (let i = 0; i < list.length; i += 1) {
  if (list[i].className === 'even') {
    list[i].classList.add('second-color');
  }
}