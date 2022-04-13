import React, {useState} from 'react';
import './App.scss';
import Display from '../Components/Display/Display';
import BtnNumbers from '../Components/Buttons/Numbers';
import DefaultOperators from '../Components/Buttons/defaultOperators';

function App() {
  const [main, setMain] = useState<string>()
  const [hold, setHold] = useState<string>()
  const [operator, setOperator] = useState<string>()

  const Numbers = function Numbers(num:number){
    setMain(main===undefined? `${num}`:`${main}${num}`)
  }

  function Clear(){
    setMain('⠀');
    setOperator('');
    setHold('')
  }

  function Operators(op:string){
    if(operator===undefined){
        setHold(main);
        setMain('⠀');
    } else if((main&&operator&&hold)!==undefined){
        setHold(Calculate())
        setMain('⠀');
    } setOperator(op);
  }

  function Calculate(){
    let result = Function(`return ` + `${hold}${operator}${(main||'').replace('⠀','')}`)();
    setOperator('');
    setMain(result);
    setHold('');
    return result
  }

  return(
    <main className='Calculadora'>
      <Display Value={{main, operator, hold}} />
      <div className='ButtonsGrid'>
        <DefaultOperators Operators={Operators} />
        <BtnNumbers Methods={{Numbers, Calculate, Clear}} />
      </div>
    </main>
  )
}

export default App;
