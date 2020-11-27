import { useContext } from "react";

import ImagesContext from "../../contexts/ImagesContext";

const Image = () => {
  const { images } = useContext(ImagesContext);
  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="image-box">
          <img className="image" src={image.largeImageURL} alt={image.type} />
          <div className="image-filter"></div>
        </div>
      ))}
    </>
  );
};
export default Image;
