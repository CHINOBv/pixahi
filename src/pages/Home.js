import { useState, useEffect } from "react";

import Search from "../components/Search";
import { getImages } from "../utils/fetchAPI";

const Home = () => {
  const [images, setImages] = useState({});
  useEffect(() => {
    getImages().then((images) => setImages(images));
    console.log(images);
  }, []);
  return (
    <div>
      <div>
        <Search />
      </div>
     
    </div>
  );
};

export default Home;
