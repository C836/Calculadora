import './Display.scss'

const Display = (props:any) => {
    let total = props.Value!==undefined ? props.Value : (String(props.Value))
        let main = (total.slice(12).search(/[+/*-]/)) < 0 ? total : String((total.slice(0, ((total.slice(12).search(/[+/*-]/))+12))))
    let split = total.replace(main,'')

    return(
        <section className="Display">
            <span>
                <div style={
                        split.length>8 ? 
                        {fontSize:200/split.length*2, lineHeight:'40px'} : 
                        {fontSize:'45px', lineHeight:'40px'}}
                    >
                    {split}</div>
                <div style={
                        main.length>8 ? 
                        {fontSize:200/main.length*2, lineHeight:'45px'} : 
                        {fontSize:'45px', lineHeight:'35px'}}
                    >
                    {main}</div>
            </span>
        </section>
    )
}

export default Display