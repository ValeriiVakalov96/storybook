import React from "react";


type AccordionPropsType = {
    titleValue: string;
    collapsed?: boolean;
}

export function Accordion({titleValue, collapsed}: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
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