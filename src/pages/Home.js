import { useState, useEffect } from "react";

import Search from "../components/Search";

import { getPopularImages, getMoreImages } from "../utils/fetchAPI";
import usePageBottom from "../utils/usePageBottom";

const Home = () => {
  const searchText = "";
  const categorySearch = "";

  const isBottomPage = usePageBottom();
  //const [popularImages, setPopularImages] = useState({});
  const [imagesInf, setImagesInf] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    //getPopularImages().then((imagesInf) => setPopularImages(imagesInf));
  }, []);
  console.log(imagesInf);
  useEffect(() => {
    const fetchMoreImages = () => {
      let pageAct = 1;
      let nextPage = (pageAct += 1);
      getMoreImages(searchText, categorySearch, nextPage).then((imagesN) => {
        setImages(() => [...imagesN.data.hits, ...images]);
      });
    };
    if (isBottomPage) {
      fetchMoreImages();
    }
  }, [isBottomPage]);

  //console.log(imagesInf);
  return (
    <div>
      <div>
        <Search
          setImages={setImages}
          setImagesInf={setImagesInf}
          imagesInf={imagesInf}
          searchT={searchText}
          categoryT={categorySearch}
        />
      </div>
      <div className="container">
        {imagesInf.hits?.length > 0 ? (
          <>
            <h2 className="image-text-results">
              Resultados encontrados: {imagesInf.totalHits}
            </h2>
            <div className="image-ctn">
              {images.map((image) => (
                <div key={image.id} className="image-box">
                  <img
                    className="image"
                    src={image.largeImageURL}
                    alt={image.type}
                  />
                  <div className="image-filter"></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="container">
            <h1 className="text-center not-found">
              No se han encontrado Resultados :(
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
