import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import './Buttons.scss'

const Keyboard = (props:any) => {
    const order1=[7,8,9,4,5,6,1,2,3,0]
    const order2=['C',<FontAwesomeIcon className='Icon' icon={faDeleteLeft} />,'.',')','(']

    window.onkeydown=(e)=>{
        if(props.Methods.Focused===false){
        e.key==='Enter'? 
            (props.Methods.Calculate())
            :
            (props.Methods.Transform(e.key.match(/^[0-9]*$/) ? 'Normal' : 
                e.key.match(/[.()/+*-]/) ? 'Default' : '' , e.key))
        }
    }

    return(
        <section className='Keyboard'>
            <div className='Numbers'>
                {order1.map((item, index) => (
                    <button className='Number' key={index} onClick={()=>props.Methods.Transform('Normal', `${item}`)}>
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