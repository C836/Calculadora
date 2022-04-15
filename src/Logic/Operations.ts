function Math(Main:string, Op:string, res:any){
    let result
    switch(Op){
    case '+':case '-': case '*': case '/': 
        console.log(Main)
        result = (Function(`return ` + Main)()).toFixed(4).replace(/^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.[0-9]*?)0*$/, "$1$2$3");
        break
    }

    res(result)
}

export default Math