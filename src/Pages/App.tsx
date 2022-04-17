import React, {useState} from 'react';
import './App.scss';
import Display from '../Components/Display/Display';
import Keyboard from '../Components/Buttons/Keyboard';
import OperatorsDefault from '../Components/Buttons/Operators-Default';

import Math from '../Logic/Operations';
import Update from '../Logic/Update';

function App() {
  const [Main, setMain] = useState<string>('')
  const [Op, setOperator] = useState<string>('')

  function Transform(Method:string, op?:string){
    console.log(Method, op)
    Update(Main||'', Method, op||'', (res:any)=>{
      setMain(res.main);
      setOperator(res.op!==undefined? res.op : Op)
    })
  }

  function Calculate(){
    Math(Main||'', Op||'', (res:any)=>{
      setMain(res);
    })
  }

  return(
    <main className='Calculadora'>
      <Display Value={Main} />
      <div className='ButtonsGrid'>
        <OperatorsDefault Update={{Transform}}/>
        <Keyboard Methods={{Calculate, Transform}} />
      </div>
    </main>
  )
}

export default App;
