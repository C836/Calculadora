import './Buttons.scss'
import {useEffect, useState} from 'react'

const Keyboard = (props:any) => {
    const order1=[7,8,9,4,5,6,1,2,3,0]
    const order2=['C','␡','.',')','(']

    window.onkeydown=(e)=>{
        if(e.key.match(/^[0-9]*$/)){
            props.Methods.Transform('Numbers', e.key)
        } 
        else if(e.key.match(/[.()/+*-]/)){
            props.Methods.Transform('Default', e.key)
        } 
        else if (e.key==='Enter'){
            props.Methods.Calculate()
        }
    }

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