import React from "react";


type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void;
}

export function Accordion({titleValue, collapsed, onChange}: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={titleValue} onChange={onChange} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string;
    onChange: () => void;
    collapsed: boolean;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={(event)=> props.onChange()}>{props.title}</h3>
        </div>
    )
}

// function AccordionTitle(props: AccordionTitlePropsType) {
//     return (
//             <h3 onClick={()=> props.onClick()}>{props.title}</h3>
//     )
// }
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}