import { useContext, useState, useEffect } from "react";
import { getImages } from "utils/fetchAPI";
import ImagesContext from "contexts/ImagesContext";

const useImages = () => {
  let INITIAL_PAGE = 1;

  const [page, setPage] = useState(INITIAL_PAGE);

  const {
    setImages,
    images,
    setImagesInfo,
    imagesInfo,
    searchCategory,
    searchKeys,
  } = useContext(ImagesContext);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    getImages(searchKeys, searchCategory, page).then((nextImages) => {
      console.log(nextImages);
      setImages((prevImages) => prevImages.concat(nextImages.data.hits));
      console.log(images);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (searchKeys) {
      getImages(searchKeys, searchCategory).then((images) => {
        setImages(images.data.hits);
        setImagesInfo(images.data);
      });
    }
  }, [searchCategory, searchKeys, setImages, setImagesInfo]);
  return { images, imagesInfo, setPage };
};
export default useImages;
