import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from "@storybook/addon-actions";
import { Accordion } from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;


export const FirstStory: Story = {
    args: {
        titleValue: 'Hello',
        collapsed: false,
        onChange: ()=> {},
    },
}


// We will be use this variant of story

const onChangehandler = action('Hello')

export const CollapsedAccordion = ()=> {
    return (
        <Accordion titleValue={'CollapsedAccordion'}
                   onChange={onChangehandler}
                   collapsed={true}/>
    )
}
export const OpenedAccordion = ()=> {
    return (
        <Accordion titleValue={'OpenedAccordion'}
                   onChange={()=> {}}
                   collapsed={false}/>
    )
}
export const AccordionDemo = ()=> {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Accordion titleValue={'AccordionDemo'}
                   onChange={()=> setCollapsed(!collapsed)}
                   collapsed={collapsed}/>
    )
}