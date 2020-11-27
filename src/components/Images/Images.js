import { useContext } from "react";

import ImagesContext from "../../contexts/ImagesContext";

import Image from "./Image";

const Images = () => {
  const { imagesInfo } = useContext(ImagesContext);
  return (
    <>
      {imagesInfo.hits?.length > 0 ? (
        <>
          <h2 className="image-text-results">
            Resultados encontrados: {imagesInfo.totalHits}
          </h2>
          <div className="image-ctn">
            <Image />
          </div>
        </>
      ) : (
        <div className="container">
          <h1 className="text-center not-found">
            No se han encontrado Resultados :(
          </h1>
        </div>
      )}
    </>
  );
};
export default Images;
