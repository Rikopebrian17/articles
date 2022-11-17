class ArticlesService {
  API_KEY = "k_u9faaqc6";
  BASE_URL = "https://imdb-api.com/en/API"

  fetch = async (path = "/", method = "GET") => {
    try {
      const response = await fetch(path, {
        method,
      });
      const jsonResponse = await response.json();

      if (!response?.ok) {
        return await Promise.reject(jsonResponse);
      }

      const responseBody = await Promise.resolve({ ...jsonResponse });

      return responseBody;
    }

    catch (err) {
      // deal with network error / CORS error
      if (err.name === "TypeError" && err.message === "Failed to fetch") {
        console.error("failed to get proper response from api server", err);
      }

      // get response
      if (typeof err.json === "function") {
        const data = await err.json();
        err.response = { data };
      }
      if (typeof err?.response?.json === "function") {
        const data = await err.response.json();
        err.response = { data };
      }

      return await Promise.reject(err);
    }
  }

  getAllArticles = async () => {
    return this.fetch(``)
  }

  getArticleDetail = async (movieId) => {
    return this.fetch(``)
  }
}


export const service = new ArticlesService();