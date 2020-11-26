import { useState } from "react";
import Select from "react-select";

function Search() {
  const optionsSelect = [
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

  const styles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#5039e7"
    }),
    input: (provided, state) => ({
      ...provided,
      color: "#fff"
    }),

  };

  return (
    <div>
      <div className="container justify-content-center">
        <div className="search">
          <input type="text" placeholder="Buscar" className="input-text" />
          <div className="search-button">
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <Select options={optionsSelect} classNamePrefix="select" styles={styles} />
    </div>
  );
}

export default Search;
