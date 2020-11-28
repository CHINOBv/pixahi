import axios from "axios";

let URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_TOKEN}`;

export const getPopularImages = () => axios(`${URL}&per_page=10&order=latest`);
export const getLatestImages = () => axios(`${URL}&per_page=10`);
export const getImages = (searchText, category, page = 1) =>
  axios(
    `${URL}&q=${searchText}&category=${category ? category : null}&page=${page}`
  );

export const getMoreImages = (searchText, category, page) => {
  return axios(`${URL}&q=${searchText}&page=${page}&category=${category}`);
};
