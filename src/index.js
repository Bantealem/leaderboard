import './style.css';
import Services from './modules/Service.js';

const form = document.querySelector('.form');
const report = document.querySelector('.report');
const refresh = document.querySelector('.refresh');
const listUl = document.querySelector('.list');

const service = new Services();

const renderScores = () => {
  const scores = service.getGameScores();
  scores.then((data) => {
    const list = data.result.sort((a, b) => b.score - a.score);
    const listHTML = list.map((item) => `<li>${item.user}: ${item.score}</li>`).join('');
    listUl.innerHTML = listHTML;
  });
  for (let i = 0; i < listUl.children.length; i += 1) {
    if (listUl.children[i] % 2 === 0) {
      listUl.children[i].classList.add('even');
    }
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.querySelector('#name').value;
  const score = e.target.querySelector('#score').value;
  service.addGameScore(name, score).then((data) => {
    if (data.result === 'Leaderboard score created correctly.') {
      report.innerHTML = 'Great you added successfully';
      setTimeout(() => {
        report.innerHTML = '';
      }, 2000);
      form.reset();
    } else {
      report.innerHTML = 'Process failed try again';
    }
  });
});

refresh.addEventListener('click', renderScores);