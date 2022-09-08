export default class Services {
  list = JSON.parse(localStorage.getItem('scores')) || [];

  getGameScores = () => new Promise((resolve, reject) => {
    fetch(`${process.env.Base_URL}games/${process.env.Game_ID}/scores`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  })

  addGameScore = (name, score) => new Promise((resolve, reject) => {
    fetch(`${process.env.Base_URL}games/${process.env.Game_ID}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name, score }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  })
}