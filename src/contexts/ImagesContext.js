import { useState, createContext } from "react";

const Context = createContext({});
export default Context;

export function ImagesProvider({ children }) {
  const [images, setImages] = useState([]);
  const [imagesInfo, setImagesInfo] = useState([]);

  return (
    <Context.Provider value={{ images, setImages, imagesInfo, setImagesInfo }}>
      {children}
    </Context.Provider>
  );
}
