import { mainModule } from "process";

function Update(Main:string, method:any, Op:string, res:any){
    let a = Main; let b
    let previous = Main.substring(Main.length-1)

    if(Main==='Erro'||Main==='Infinity'||Main==='NaN'){
        Main=''; a=''; b='';
    }

    if((typeof(method)==='object')&&(method.props.icon.iconName==='delete-left')){
        if(Main.length>1) {
            a = Main!=='0'? Main.slice(0, -1) : Main;}
        else{
            a = '0'}
    }

    switch(method){
        case 'Normal': 
            a = Main!=='0' ? (Main + Op) : (Op);
            b = Op;
            break;

        case 'C':
            if(Main!=='0') {a = '0'; b = '0'}
            break

        case 'Default':
            if((previous.match(/[0-9]/g)||previous.match(/[()]/g))||(Op==='-'&&previous!=='-')){
                a = Main + Op
                b = Op; 
                break
            }
            else if (previous.match(/[+*/-]/g)&&Main.substring(Main.length-2).match(/[0-9]/g)){
                console.log('era')
                a = Main.substring(0, Main.length-1) + Op
                b = Op; 
                break
            } 
            break
        case '(':
            a = Main!=='0' ? (Main + method) : (method);
            break;

        case ')':
            if((Main.split('(').length)>(Main.split(')').length)){
            a = Main + method;
        } break

        case '.':
            if(previous.match(/[0-9]/g)){
            a = Main + method; 
            }break
        case '√':
            a = Main + `(${parseFloat((Math.sqrt(Number(Op))).toFixed(4))})`
            break
        case '³√':
            a = Main + `(${parseFloat((Math.cbrt(Number(Op))).toFixed(4))})`
            break
        
        case '10ˣ':
            let res = `(${Math.pow(10,Number(Op))})`
            a = Main!=='0' ? (Main + res) : (res);
    }

    res({
        "main": a,
        "op":b
    })
}

export default Update