import './Tags.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Tags(props:any){
    const Active = props.Switch.Active

    return(
        <section>
            <div className={'Tags Switch'} onClick={()=>props.Switch.Switch('DarkMode')}>
                <FontAwesomeIcon className='Icon' icon={props.Switch.Color==='Dark'? faSun:faMoon} />
            </div>
            <div className={`Tags More ${Active}`} onClick={()=>{props.Switch.Switch('More'); props.Switch.activate()}}>
                <FontAwesomeIcon className='Icon' icon={faPlus} />
            </div>
        </section>
    )
}

export default Tags