import './Tags.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faPlus } from '@fortawesome/free-solid-svg-icons'


function Tags(props:any){
    return(
        <section>
            <div className={'Tags Switch'} onClick={()=>props.Switch.Switch('DarkMode')}>
                <FontAwesomeIcon className='Icon' icon={props.Switch.Color==='Dark'?faSun:faMoon} />
            </div>
            <div className={'Tags More'} onClick={()=>props.Switch.Switch('More')}>
                <FontAwesomeIcon className='Icon' icon={faPlus} />
            </div>
        </section>
    )
}

export default Tags