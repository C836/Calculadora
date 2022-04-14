function Math(main:any, op:any, hold:any, res:any){
    switch(op){
        case '+':case '-':case '*': case '/':
            let result = Function(`return ` + `${hold}${op}${main.substring(1)}`)();
            res({
                'main': result.toFixed(2).replace(/\.00$/, ''),
                'op':'', 
                'hold': ''
            })
        }
}

export default Math