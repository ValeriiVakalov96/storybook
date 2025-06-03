import {useState} from "react";

type OnOffPropsType = {
   onChange: (on:boolean) => void;
}
export function UncontrolledOnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false);


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

    const onClicked = ()=> {
        setOn(false)
        props.onChange(false)
    }
    const offClicked = ()=> {
        setOn(true)
        props.onChange(true)
    }


  return(
      <div >
          <div style={onStyle} onClick={offClicked}>On</div>
          <div style={offStyle} onClick={onClicked}>Off</div>
          <div style={indicatorStyle}></div>
      </div>
  )
}