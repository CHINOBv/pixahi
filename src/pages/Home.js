import { useState, useEffect } from "react";

import Search from "../components/Search";
import { getPopularImages } from "../utils/fetchAPI";

const Home = () => {
  const [popularImages, setPopularImages] = useState({});
  const [images, setImages] = useState([]);
  useEffect(() => {
    getPopularImages().then((images) => setPopularImages(images));
  }, []);
  console.log(images);
  return (
    <div>
      <div>
        <Search setImages={setImages} images={images} />
      </div>
      <div className="image-ctn">
        {images.hits?.length > 0
          ? images.hits.map((image) => {
              console.log(image);
              return (
                <div key={image.id} className='image-ct' >
                  <div className="image-box">
                    <img
                      className="image"
                      src={image.largeImageURL}
                      alt={image.type}
                    />
                  </div>
                  <div className='image-filter'></div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
