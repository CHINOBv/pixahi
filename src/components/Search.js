import { useState, useContext, useEffect } from "react";
import Select from "react-select";

import useImages from "hooks/useImages";

import ImagesContext from "contexts/ImagesContext";

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
  const {
    setSearchKeys,
    searchKeys,
    setSearchCategory,
    searchCategory,
  } = useContext(ImagesContext);
  const [contract, setContract] = useState(false);

  useImages();
  useEffect(() => {
    if (searchCategory.trim() || searchKeys.trim()) {
      setContract(true);
    } else {
      setContract(false);
    }
  }, [searchKeys, searchCategory]);

  //console.log(searchCategory);
  return (
    <div>
      <div className="container justify-content-center">
        <div className={`search ${contract ? "search-contract" : ""}`}>
          <input
            type="text"
            placeholder="Buscar"
            className="input-text"
            onChange={(e) =>
              setSearchKeys(e.target.value.trim() ? e.target.value : "")
            }
            value={searchKeys}
            required
          />
          <div className="search-button">
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div
        className={`select-ctn ${contract ? "select-contract" : ""} ${
          searchKeys ? "select-show" : ""
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
          onChange={(e) => setSearchCategory(e.value.trim() ? e.value : "")}
        />
      </div>
    </div>
  );
}

export default Search;
