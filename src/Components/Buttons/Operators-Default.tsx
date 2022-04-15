import './Buttons.scss'

const OperatorsDefault = (props:any) =>{
    const arrOperators=['+','-','*','/']

    return(
        <section className='Operators'>
            {arrOperators.map((item, index) => (
                <button onClick={()=>props.Update.Transform('Default', item)}>
                    {item}
                </button>
            ))}
        </section>
    )
}

export default OperatorsDefault