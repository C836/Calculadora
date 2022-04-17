function Update(Main:string, method:any, Op:string, res:any){
    let a = Main; let b
    let previous = Main.substring(Main.length-1)

    if(Main===('Erro'||Main==='Infinity'||Main==='NaN')){
        Main=''
    }

    switch(method){
        case 'Numbers':
            a = Main + Op
            break
        case 'C':
            a = ''
            b = ''
            break
        case '␡':
            a = Main.slice(0, -1); break

        case 'Default':
            if(previous.match(/[0-9]/g)){
                console.log('09')
                a = Main + Op
                b = Op; break
            }
            else if (previous===''&&Op==='-'){
                console.log('empty')
                a = Op
                b = Op; break
            }
            else if (previous.match(/[+*/-]/g)&&Main.substring(Main.length-2).match(/[0-9]/g)){
                console.log('era')
                a = Main.substring(0, Main.length-1) + Op
                b = Op; break
            } break
        case '(':
            a = Main + method;
        break

        case ')':
            if((Main.split('(').length)>(Main.split(')').length)){
            a = Main + method;
        } break

        case '.':
            a = Main + method; break
    }

    res({
        "main": a,
        "op":b
    })
}

export default Update