import React, { useState } from "react";

import AppLayout from "../../layouts/AppLayout";

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
        console.log(number, text);
        const url = `https://api.whatsapp.com/send?phone=91${number}&text=${text}`;
        // window.location.href = `https://api.whatsapp.com/send?phone=91${number}&text=${text}`;
        window.open(url, '_blank')
    }

    return (
        <AppLayout>
            <div>
                <input type={'text'} placeholder={'Phone Number'} onChange={onNumberChanged} />
                <br />
                <input type={'text'} placeholder={'Optional text'} onChange={onTextChanged} />
                <br />
                <button onClick={onSendClicked} >{'Send'}</button>
            </div>
        </AppLayout>
    )
}

export default HomeScreen;