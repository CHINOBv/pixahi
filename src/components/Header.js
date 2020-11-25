import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="nav">
        <p className="nav-title">PixaHi</p>
        <ul className={`nav-list ${showMenu ? "show" : ""}`}>
          <li>
            <a className="nav-list-item" href="/">
              Fotos
            </a>
          </li>
          <li>
            <a className="nav-list-item" href="/">
              Ilustraciones
            </a>
          </li>
        </ul>
        <div id="btn-nav" onClick={() => setShowMenu(!showMenu ? true : false)}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
