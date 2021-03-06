import React, {useState, useRef} from 'react';
import './App.scss';
import Display from '../Components/Display/Display';
import Keyboard from '../Components/Buttons/Keyboard';
import OperatorsDefault from '../Components/Buttons/Operators-Default';
import Tags from '../Components/Tags/Tags';
import Operators_Extra from '../Components/Extra-Panels/Operators-Extra';
import Math from '../Logic/Operations';
import Update from '../Logic/Update';

function App() {
  const [Main, setMain] = useState<string>('0')
  const [Op, setOperator] = useState<string>('')
  const [Color, setScheme] = useState<string>('Dark')
  const [Active, Activate] = useState<string>('');
  const [Focused, Focus] = useState<boolean>(false);

  function activate(){
      Activate(Active===''? 'More-Active' : '')
  }

  function focus(type:boolean){
    Focus(type)
  }

  function Transform(Method:string, op?:string){
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

  function Switch(method:string){
    switch(method){
      case 'DarkMode':
        setScheme(Color==='Dark'?'Light':'Dark');
        break
    }
  }

  return(
    <main className={Color==='Dark'? 'Dark' : 'Light'}>
      <Tags Switch={{Switch, activate, Color, Active}}/>
      <Operators_Extra Switch={{Transform, focus, Focused, Active}} />
      <div className={`Calculadora`}>
        <Display Value={Main} />
        <div className='ButtonsGrid'>
          <OperatorsDefault Update={{Transform}}/>
          <Keyboard Methods={{Calculate, Transform, Focused}} />
        </div>
      </div>
    </main>
  )
}

export default App;
