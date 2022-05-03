function Update(Main:string, method:any, Op:string, res:any){
    let Display = Main; let Operator
    let previous = Main.substring(Main.length-1)

    if(Main==='Erro'||Main==='Infinity'||Main==='NaN'){
        Main=''; Display=''; Operator='';
    }

    if((typeof(method)==='object')&&(method.props.icon.iconName==='delete-left')){
        if(Main.length>1) {
            Display = Main!=='0'? Main.slice(0, -1) : Main}
        else{
            Display = '0'}
    }

    switch(method){
        case 'Normal': 
            Display = Main!=='0' ? (Main + Op) : (Op);
            Operator = Op;
            break;

        case 'C':
            if(Main!=='0') {Display = '0'; Operator = '0'}
            break

        case 'Default':
            if((previous.match(/[0-9]/g)||previous.match(/[()]/g))||(Op==='-'&&previous!=='-')){
                Display = Main + Op
                Operator = Op; 
                break
            }
            else if (previous.match(/[+*/-]/g)&&Main.substring(Main.length-2).match(/[0-9]/g)){
                console.log('era')
                Display = Main.substring(0, Main.length-1) + Op
                Operator = Op; 
                break
            } 
            break
        case '(':
            Display = Main!=='0' ? (Main + method) : (method);
            break;

        case ')':
            if((Main.split('(').length)>(Main.split(')').length)){
            Display = Main + method;
        }   break

        case '.':
            if(previous.match(/[0-9]/g)){
            Display = Main + method; 
            }break

        case '√':
            Display = Main + `(${parseFloat((Math.sqrt(Number(Op))).toFixed(4))})`
            break

        case '³√':
            Display = Main + `(${parseFloat((Math.cbrt(Number(Op))).toFixed(4))})`
            break
        
        case '10ˣ':
            Display = Main!=='0' ? (Main + res) : `(${Math.pow(10,Number(Op))})`;
            break

        case '!':
            let rval=1;
            for (let i = 2; i <= Number(Op); i++){
                rval = rval * i
            }
            Display = Main + `${rval}`;
    }

    res({
        "main": Display,
        "op": Operator
    })
}

export default Update