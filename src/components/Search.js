import { useState } from "react";
import Select from "react-select";

import { getImages } from "../utils/fetchAPI";

const optionsSelect = [
  { label: 'Ninguna', value: ''},
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
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [contract, setContract] = useState(false);

  const searchImages = () => {
    if (!searchText) {
    }
    getImages(searchText, category).then((images) => {
      setImagesInf(images.data);
      setImages(images.data.hits);
      setContract(true);
      setSearchText("");
      setCategory("");
    });
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
              setSearchText(e.target.value.trim() ? e.target.value : "")
            }
            value={searchText}
            required
          />
          <div className="search-button" onClick={() => searchImages()}>
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div
        className={`select-ctn ${contract ? "select-contract" : ""} ${
          searchText ? "select-show" : ""
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
