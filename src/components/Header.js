import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {

    return (
        <header>
            <div className="header-left">
                <a href="#" className="btn-header fa fa-chevron-left"></a>
            </div>
            <div className="header-right">Notification</div>
        </header>
    )
}

export default Header
