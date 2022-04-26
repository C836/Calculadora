function Math(Main:string, Op:string, res:any){
    let result;

    if(Main.indexOf('^')>-1) Main = Main.replace('^', '**');
    if(Main.indexOf('%')>-1){
        console.log('repetiu')
        while(Main.indexOf('%')!==-1){
        let num = Main.split('%')[1]

        let newNumber = 0
        if(num.match(/[^0-9]/g)){
            console.log('entrou no loop')
            for(let x=0; x<num.length; x++){
                if(num[x].match(/[^0-9]/g)){
                    newNumber=Number(num.split(num[x])[0])
                }
            }
        } 
        else {newNumber=Number(num); console.log('não entrou no loop')}

        Main = Main.replace('%'+newNumber,'*'+(Number(newNumber))/100)
        }
        console.log(Main)
    }
    try{
        result = String(parseFloat((Function(`return ` + Main)()).toFixed(4)))
    }
    catch(err){
         result = 'Erro'
    }
    res(result)
}

export default Math