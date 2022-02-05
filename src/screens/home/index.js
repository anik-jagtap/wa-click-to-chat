import React, { useState } from "react";

import AppLayout from "../../layouts/AppLayout";

import "./style.css";

const HomeScreen = () => {
    const [ number, setNumber ] = useState();
    const [ text, setText ] = useState();

    const onNumberChanged = (event) => {
        setNumber(event.target.value);
    }

    const onTextChanged = (event) => {
        setText(event.target.value);
    }

    const onSendClicked = () => {
        console.log("here", number, text);
        // if(text && text.length === 10) {
            const url = `https://api.whatsapp.com/send?phone=91${number}&text=${text}`;
            // window.location.href = `https://api.whatsapp.com/send?phone=91${number}&text=${text}`;
            window.open(url, '_blank')
        // } else {
            // if(!text) {
            //     alert("Please enter number!")
            // } else {
            //     alert("Please enter a valid number!")
            // }
        // }
    }

    return (
        <AppLayout>
            <div className={"home-container"}>
                <div className={"informative"}>
                    {
                        "Note: Please enter a valid number and some optional text to begin..."
                    }
                </div>
                {/* <div> */}
                    <input className={"ph-text"} type={'text'} placeholder={'Phone Number'} onChange={onNumberChanged} />
                {/* </div> */}
                <br />
                {/* <div> */}
                    <input className={"msg-text"} type={'text'} placeholder={'Optional text'} onChange={onTextChanged} />
                {/* </div> */}
                <br />
                <div className={"submit-btn"} onClick={onSendClicked} >{'Send'}</div>
            </div>
        </AppLayout>
    )
}

export default HomeScreen;