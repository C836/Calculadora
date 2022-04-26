let func = '20*12*40.5%50*50*30%40'

while(func.indexOf('%')!==-1){
let num = func.split('%')[1]

let newNumber = ''
if(num.match(/[^0-9]/g)){
    for(let x in num){
        if(num[x].match(/[^0-9]/g)){
            newNumber=num.split(num[x])[0];
        }
    }
} 
else newNumber=num

func = func.replace('%'+newNumber,'*'+(Number(newNumber))/100)
}