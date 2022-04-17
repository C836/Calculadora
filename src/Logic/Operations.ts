function Math(Main:string, Op:string, res:any){
    let result
    console.log(Op)
    console.log('a')
    switch(Op){
    case '+':case '-': case '*': case '/': 
        console.log('a')
        console.log(Main)
        result = String(parseFloat((Function(`return ` + Main)()).toFixed(4)))
        console.log(result)
        break
    default :
        result = 'Erro'
    }

    res(result)
}

export default Math