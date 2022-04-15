function Update(Main:string, method:any, Op:string, res:any){
    console.log(method, Op)
    let a, b
    switch(method){
        case 'Numbers':
            a = Main + Op
            break
        case '(':case ')':
            if(''+Number(Main.substring(Main.length-1))===Main.substring(Main.length-1)){
                a = Main + method
            } else a = Main
            break
        case '.':
            if(''+Number(Main.substring(Main.length-1))===Main.substring(Main.length-1)){
                a = Main + method
            } else a = Main
            break
        case 'Default':
            a = Main + Op
            b = Op;
            break
        case 'Clear':
            a = ''
            break
        case '␡':
            a = Main.slice(0, -1)
            break
    }

    res({
        "main": a,
        "op":b
    })
}

export default Update