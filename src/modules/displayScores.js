import { results, baseUrl } from "./getElements.js";

class DisplayScores {
  display = async () => {
    let loading = true;
    loading &&
      (results.innerHTML = `
      <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <div class="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>
    </div>
        `);

    try {
      const data = await fetch(baseUrl);
      const { result } = await data.json();
      let str = "";

      result.map((data) => {
        str += `
            <tr>
                <td>${data.user}</td>
                <td>${data.score}</td>
            </tr>
            `;
        return data;
      });

      if (result.length === 0) {
        str += `
        <tr>
            <td colspan="2" class="text-danger">Data not found</td>
        </tr>
        `;
      }

      results.innerHTML = str;
      loading = false;
    } catch (error) {
      console.error(error.message);
      loading = false;
    }
  };
}

export default DisplayScores;
