import React from "react";

import Header from "../../components/header";

import "./style.css";

const AppLayout = (props) => {
    return (
        <div className={"main-container"}>
            <Header />
            <div className={"app-container"}>
                <div className={"app-playground"}>
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    )
}

export default AppLayout;