import React from "react";

function Search() {
  return (
    <div>
      <div className="container">
          <div className="search">
            <input type="text" placeholder="Buscar" className="input-text"/>
            <div className="search-button">
              <i className="fa fa-search"></i>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Search;
