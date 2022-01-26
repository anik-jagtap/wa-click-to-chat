import React from "react";
import './style.css';

import WaLogo from "../../assets/wa-logo-transparent-bg.png"

const Header = () => {
    return (
        <div className={"header-main"}>
            <div className={"header-wrap"}>
                <div className={"brand-wrap"}>
                    <img src={WaLogo} className={"wa-logo"} />
                    <span className={"wa-brand-name"}>{"WA Click To Chat"}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;