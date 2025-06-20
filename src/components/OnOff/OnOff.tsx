import {useState} from "react";

type OnOffPropsType = {
    on: boolean;
    onChange: (on: boolean) => void;
}
export function OnOff({on, onChange}: OnOffPropsType) {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
        marginLeft: '5px',
    }

  return(
      <div >
          <div style={onStyle} onClick={()=> onChange(true)}>On</div>
          <div style={offStyle} onClick={()=> onChange(false)} >Off</div>
          <div style={indicatorStyle}></div>
      </div>
  )
}