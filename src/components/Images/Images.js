import { useContext, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";

import ImagesContext from "contexts/ImagesContext";
import useNearScreen from "hooks/useNearScreen";

import Image from "./Image";
import useImages from "hooks/useImages";

const Images = () => {
  const { imagesInfo } = useContext(ImagesContext);

  const { show, elementRef, setOnce } = useNearScreen({
    distance: "100px",
  });

  const { setPage } = useImages();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );
  useEffect(() => {
    if (show){ 
      handleDebounceNextPage()
      setOnce(false)
    };
  }, [show, handleDebounceNextPage, setOnce]);

  return (
    <>
      {imagesInfo.hits?.length > 0 ? (
        <>
          <h2 className="image-text-results">
            Resultados encontrados: {imagesInfo.total}
          </h2>
          <div className="image-ctn">
            <Image />
          </div>
          <div ref={elementRef}></div>
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>d</button>
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
