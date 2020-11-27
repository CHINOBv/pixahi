import { useContext } from "react";
import { getImages } from "../utils/fetchAPI";
import ImagesContext from "../contexts/ImagesContext";

const useImages = (keywords, category) => {
  const { setImages, images, setImagesInfo, imagesInfo } = useContext(
    ImagesContext
  );
  /* useEffect(() => {
    if(!keywords){
      return;
    }
    getImages(keywords, category).then((images) => {
      setImages(images.hits);
      setImagesInfo(images);
    });
  }, [category, keywords, setImages, setImagesInfo]) */
  const search = () => {
    getImages(keywords, category).then((images) => {
      setImages(images.data.hits);
      setImagesInfo(images.data);
    });
  };
  return { images, imagesInfo, search };
};
export default useImages;
