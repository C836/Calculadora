import React, {useState} from 'react';
import './App.scss';
import Display from '../Components/Display/Display';
import BtnNumbers from '../Components/Buttons/Numbers';
import DefaultOperators from '../Components/Buttons/defaultOperators';
import Math from '../Logic/Math';

function App() {
  const [Main, setMain] = useState<string>()
  const [Hold, setHold] = useState<string>()
  const [Operator, setOperator] = useState<string>()

  function Update(main:any, operator:any, hold:any){
    if(operator==='Numbers') {
      setMain(Main===undefined? `${main}`:`${Main}${main}`);
      return
    }
    setMain(main); setOperator(operator); setHold(hold)
  }

  function Operators(op:string){
    if(Operator===undefined||Operator===''){
        setHold(Main);
        setMain('⠀');
    } else if((Main&&Operator&&Hold)!==undefined&&Main!=='⠀'){
        Calculate(false)
    } setOperator(op);
  }

  function Calculate(op:boolean){
    if(op===false){
      Math(Main, Operator, Hold, (res:any)=>{
        Update('⠀', '-', res.main);
      })
    } else {
      Math(Main, Operator, Hold, (res:any)=>{
        Update(res.main, res.op, res.hold)
      })
    }
  }

  return(
    <main className='Calculadora'>
      <Display Value={{Main, Operator, Hold}} />
      <div className='ButtonsGrid'>
        <DefaultOperators Operators={Operators} />
        <BtnNumbers Methods={{Calculate, Update}} />
      </div>
    </main>
  )
}

export default App;
