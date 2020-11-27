import { useState } from "react";
import Select from "react-select";

import useImages from "../hooks/useImages";

const optionsSelect = [
  { label: "Ninguna", value: "" },
  { label: "Fondos", value: "backgrounds" },
  { label: "Moda", value: "fashion" },
  { label: "Naturaleza", value: "nature" },
  { label: "Ciencia", value: "science" },
  { label: "Educacion", value: "education" },
  { label: "Sentimientos", value: "feelings" },
  { label: "Salud", value: "health" },
  { label: "Personas", value: "people" },
  { label: "Religion", value: "religion" },
  { label: "Lugares", value: "places" },
  { label: "Animales", value: "animals" },
  { label: "Industria", value: "industry" },
  { label: "Computacion", value: "computer" },
  { label: "Comida", value: "food" },
  { label: "Deportes", value: "sports" },
  { label: "Transportacion", value: "transportation" },
  { label: "Viajes", value: "travel" },
  { label: "Construcciones", value: "buildings" },
  { label: "Negocios", value: "business" },
  { label: "Musica", value: "music" },
];

function Search({ setImagesInf, setImages }) {
  const [keywords, setKeywords] = useState("");
  const [category, setCategory] = useState("");
  const [contract, setContract] = useState(false);

  const { imagesInfo, search } = useImages(keywords, category);
  console.log(imagesInfo);
  const searchImages = () => {
    if (!keywords) {
    }
    search();
    setContract(true);
    setCategory("");
    setKeywords("");
  };
  //console.log(category);
  return (
    <div>
      <div className="container justify-content-center">
        <div className={`search ${contract ? "search-contract" : ""}`}>
          <input
            type="text"
            placeholder="Buscar"
            className="input-text"
            onChange={(e) =>
              setKeywords(e.target.value.trim() ? e.target.value : "")
            }
            value={keywords}
            required
          />
          <div className="search-button" onClick={() => searchImages()}>
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div
        className={`select-ctn ${contract ? "select-contract" : ""} ${
          keywords ? "select-show" : ""
        }`}
      >
        <Select
          options={optionsSelect}
          classNamePrefix="select"
          className="select"
          onFocus="false"
          autoFocus={false}
          isSearchable={false}
          placeholder="Selecciona una Categoria"
          onChange={(e) => setCategory(e.value.trim() ? e.value : "")}
        />
      </div>
    </div>
  );
}

export default Search;
