import './Display.scss'

const Display = (props:any) => {
    return(
        <section className="Display">
            <span>
                <div>{props.Value.Hold}{props.Value.Operator}</div>
                <div>{props.Value.Main}</div>
            </span>
        </section>
    )
}

export default Display