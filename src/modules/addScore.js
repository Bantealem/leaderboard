import {
  error,
  success,
  nameField,
  scoreField,
  baseUrl,
} from "./getElements.js";

class AddScore {
  addScore = async (e) => {
    e.preventDefault();
    const nameText = nameField.value;
    const scoreText = scoreField.value;
    try {
      const sendData = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: nameText,
          score: parseInt(scoreText, 10),
        }),
      });
      const { result, message } = await sendData.json();
      if (result) {
        success.innerText = result;
        success.className = "alert alert-success";
        setInterval(() => {
          success.className = "d-none";
        }, 3000);
      } else {
        error.innerText = message;
        error.className = "alert alert-danger";
        setInterval(() => {
          error.className = "d-none";
        }, 3000);
      }
      nameField.value = "";
      scoreField.value = "";
    } catch (error) {
      console.error(error.message);
    }
  };
}

export default AddScore;
