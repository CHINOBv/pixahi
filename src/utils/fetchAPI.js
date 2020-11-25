import axios from "axios";

let URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_TOKEN}`;

export const getImages = async () => {
  let images = {};
  axios(`${URL}&per_page=10&order=latest`).then((response) => {
    images.latest = response;
    axios(`${URL}&per_page=10`).then((response) => {
      images.popular = response;
    })
  })
  
  return images;
};
