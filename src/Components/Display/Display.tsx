import './Display.scss'

const Display = (props:any) => {
    return(
        <section className="Display">
            <span>
                <div>{props.Value}</div>
            </span>
        </section>
    )
}

export default Display