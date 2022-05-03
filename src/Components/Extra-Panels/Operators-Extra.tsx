import './Operators_Extra.scss'
import {useState, useRef} from 'react';
import Pop_Up from './Pop_Up'

function Operators_Extra(props:any){
    const order = ['√','³√','x²','^','10ˣ','π','%','!'];
    const posOrder = [1,1,2,2,3,3,4,4,5,5];
    const Active = props.Switch.Active === 'More-Active' ? 'Operators-Active' : '';
    const Focused = props.Switch.Focused;
    
    const [position, setPos] = useState([1,1])
    const [popValue, setValue] = useState<string>('');
    const [popType, setPop] = useState<string>()

    const inputFocus = useRef(null)

    const Update = (method:string, Op:any) =>{
        props.Switch.Transform(method, Op);
    }

    const Focus = (type:boolean, index:number) =>{
        setPos([posOrder[index],((index&1) ? 2 : 1)]);
        setValue('')
        props.Switch.focus(type);
            setTimeout(()=>
            // @ts-ignore: Object is possibly 'null'.
            inputFocus.current.focus(), 10) 
    }

    const Resolve = (item:string, index:number) =>{
        switch(item){
            case 'π': 
                Update('Normal','(3.1415)'); break
            case '^':
                Update('Default','^'); break
            case '%':
                Update('Default','%'); break
            default:
                setPop(item); Focus(true, index);
        }
    }

    return(
        <section className={`Operators_Extra ${Active}`}>
            <div className='Extra_Buttons'>
                {order.map((item, index) => (
                    <button 
                    key={index} 
                    className='Number Extra' 
                    onClick={()=>
                        Resolve(item, index)}>
                    {item}
                    </button> 
                ))}
            </div>
            <span className='PopUp_Wrapper'>
                <Pop_Up Values={{Update, Focus, setValue, Focused, inputFocus, position, popType, popValue}} />
            </span>
        </section>
    )
}

export default Operators_Extra