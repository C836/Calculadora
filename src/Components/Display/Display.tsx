import './Display.scss'

const Display = (props:any) => {
    return(
        <section className="Display">
            <span>
                <div>{props.Value.hold}{props.Value.operator}</div>
                <div>{props.Value.main}</div>
            </span>
        </section>
    )
}

export default Display