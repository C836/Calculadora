import './Operators_Extra.scss'

function Pop_Up(props:any){
    const popValue = props.Values.popValue
    const GridPosition = props.Values.position;

    return(
        <section 
        className={`Pop_Up ${props.Values.Focused===false?'hide':''}`}
        style={{gridArea:`${GridPosition[0]}/${GridPosition[1]}`}}
        >

            <input 
            ref={props.Values.inputFocus}
            type={'number'} 
            onChange={(e) => {
                console.log(props.Values.popType)
                props.Values.setValue(e.target.value)
            }} 
            className={'Main'}
            value={popValue}
            />
            
            <button onClick={()=>{props.Values.Update(props.Values.popType, popValue); props.Values.Focus(false)}}>OK</button>
            <button onClick={()=>{props.Values.Focus(false)}}>x</button>
        </section>
    )
}

export default Pop_Up