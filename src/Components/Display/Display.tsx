import './Display.scss'

const Display = (props:any) => {
    return(
        <section className="Display">
            <span>
                <div style={
                        String(props.Value).length>10 ?
                        {fontSize:220/String(props.Value).length*2} :
                        {fontSize:'45px'}}
                    >
                    {props.Value}</div>
            </span>
        </section>
    )
}

export default Display