import './Buttons.scss'

const BtnNumbers = (props:any) => {
    let order=[7,8,9,0,4,5,6,1,2,3]
    return(
        <section className='Numbers'>
            {order.map((item, index) => (
                <button className='Number' onClick={()=>props.Methods.Update(item,'Numbers', '')}>
                    {item}
                </button>
            ))}
            
            <button className='Equal' onClick={()=>props.Methods.Calculate()}>=</button>
            <button className='Clear' onClick={()=>props.Methods.Update('⠀', '', '')}>C</button>
        </section>
    )
}

export default BtnNumbers