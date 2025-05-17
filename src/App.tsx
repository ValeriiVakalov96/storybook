import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <Accordion titleValue={'menu'} collapsed={true}/>
            <Accordion titleValue={'menu 2'} collapsed={false}/>
            <Rating value={3}/>
            <OnOff on={true}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string;
}
function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
