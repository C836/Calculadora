import './Buttons.scss'

const Keyboard = (props:any) => {
    const order1=[7,8,9,4,5,6,1,2,3,0]
    const order2=['C','␡','.',')','(']
    return(
        <section className='Keyboard'>
            <div className='Numbers'>
                {order1.map((item, index) => (
                    <button className='Number' onClick={()=>props.Methods.Transform('Numbers', `${item}`)}>
                        {item}
                    </button>
                ))}
            </div>

            <div className='Actions'>
                {order2.map((item, index) => (
                    <button className='Action' onClick={()=>props.Methods.Transform(item)}>
                        {item}
                    </button>
                ))}

                <button className='Equal' onClick={()=>props.Methods.Calculate()}>=</button>
            </div>
        </section>
    )
}

export default Keyboard