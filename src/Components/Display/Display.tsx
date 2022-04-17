import './Display.scss'

const Display = (props:any) => {
    return(
        <section className="Display">
            <span>
                <div style={
                        props.Value.length>8 ?
                        {fontSize:200/props.Value.length*2} :
                        {fontSize:'45px'}}
                    >
                    {props.Value}</div>
            </span>
        </section>
    )
}

export default Display