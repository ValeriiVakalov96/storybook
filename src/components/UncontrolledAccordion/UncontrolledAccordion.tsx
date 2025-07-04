import React, {useState} from "react";
import {Accordion} from "../Accordion/Accordion";


type AccordionPropsType = {
    titleValue: string;
}

export function UncontrolledAccordion({titleValue}: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <AccordionTitle title={titleValue} onClick={()=>setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
            <h3 onClick={()=> props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}