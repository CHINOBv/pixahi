import { useState, createContext } from "react";

const Context = createContext({});
export default Context;

export function ImagesProvider({ children }) {
  const [images, setImages] = useState([]);
  const [imagesInfo, setImagesInfo] = useState([]);
  const [searchKeys, setSearchKeys] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  return (
    <Context.Provider
      value={{
        images,
        setImages,
        imagesInfo,
        setImagesInfo,
        searchKeys,
        setSearchKeys,
        searchCategory,
        setSearchCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
}
