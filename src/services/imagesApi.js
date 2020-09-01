import axios from "axios";

const API_Url = "https://pixabay.com/api/";
const API_KEY = "18117769-b22481b40e1a87a36edc65d23";
const perPage = 12;

const fetchImagesWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `${API_Url}?q=${searchQuery}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&key=${API_KEY}`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};
