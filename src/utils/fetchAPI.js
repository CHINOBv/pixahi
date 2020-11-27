import axios from "axios";

let URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_TOKEN}`;

export const getPopularImages = () => axios(`${URL}&per_page=10&order=latest`);
export const getLatestImages = () => axios(`${URL}&per_page=10`);
export const getImages = (searchText, category) =>
  axios(`${URL}&q=${searchText}&category=${category ? category : null}`);
