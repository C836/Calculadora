import './Buttons.scss'

const DefaultOperators = (props:any) =>{
    const arrOperators=['+','-','*','/']

    return(
        <section className='Operators'>
            {arrOperators.map((item, index) => (
                <button onClick={()=>props.Operators(item)}>
                    {item}
                </button>
            ))}
        </section>
    )
}

export default DefaultOperators