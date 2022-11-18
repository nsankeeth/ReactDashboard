import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faCloud,
  faFileInvoice,
  faPaw,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import "./SideMenu.css";

// return active/non-active Icon based on the activeTab value
const TabButton = ({ name, icon, activeTab }) => {
  if (name === activeTab) {
    return (
      <li className="nav-item">
        <a href="#" className="nav-link py-3 border-bottom active">
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <a href={`/${name}`} className="nav-link py-3 border-bottom">
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
    );
  }
};

// render Side Menu
const SideMenu = ({ activeTab }) => {
  return (
    <div
      className="side-navbar d-flex justify-content-between flex-wrap flex-column active-nav"
      style={{ width: "80px" }}
    >
      <a href="/" className="d-block p-3 link-dark text-decoration-none">
        <img
          src="./img_avatar.png"
          alt="Avatar"
          className="avatar"
          style={{ width: "3rem" }}
        ></img>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <TabButton name="home" icon={faHouseUser} activeTab={activeTab} />
        <TabButton name="weather" icon={faCloud} activeTab={activeTab} />
        <TabButton name="news" icon={faFileInvoice} activeTab={activeTab} />
        <TabButton name="pokemon" icon={faPaw} activeTab={activeTab} />
        <TabButton
          name="tools"
          icon={faScrewdriverWrench}
          activeTab={activeTab}
        />
      </ul>
    </div>
  );
};

export default SideMenu;
