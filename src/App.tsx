import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [acrdn, setAcrdn] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    return (
        <div className={'App'}>
            <Rating/>
            {/*<OnOff on={switchOn}*/}
            {/*       onChange={setSwitchOn}/>*/}

            <Accordion titleValue={'Menu'}
                       onChange={()=> setAcrdn(!acrdn)}
                       collapsed={acrdn}/>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
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
