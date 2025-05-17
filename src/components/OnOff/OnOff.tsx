type OnOffPropsType = {
    on: boolean;
}
export function OnOff(props: OnOffPropsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '5px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red',
        marginLeft: '5px',
    }

  return(
      <div >
          <div style={onStyle}>On</div>
          <div style={offStyle}>Off</div>
          <div style={indicatorStyle}></div>
      </div>
  )
}