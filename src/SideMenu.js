import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

import "./SideMenu.css"

const SideMenu = () => {
    return (
        <div className="side-navbar d-flex justify-content-between flex-wrap flex-column active-nav" style={{ width: "80px" }}>
            <a href="/" className="d-block p-3 link-dark text-decoration-none">
                <img src="./img_avatar.png" alt="Avatar" className="avatar" style={{ width: "3rem" }}></img>
            </a>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                    <a href="#" className="nav-link active py-3 border-bottom">
                        <FontAwesomeIcon icon={faHouseUser} />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom">
                        <FontAwesomeIcon icon={faCloud} />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom">
                        <FontAwesomeIcon icon={faHouseUser} />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom">
                        <FontAwesomeIcon icon={faHouseUser} />
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom">
                        <FontAwesomeIcon icon={faHouseUser} />
                    </a>
                </li>
            </ul>
        </div >
    );
};

export default SideMenu;