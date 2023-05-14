let sum = 40000;  //12950
console.log(`sum is ${sum}`);

let sumFin = sum - 12950;
console.log(`sumFin is ${sumFin}`);

let tax = 0;

for(;;){

    if (sumFin > 539900){
        tax = (sumFin - 539900) * 0.37;
    } 

}

console.log(`Youre Tax is = ${tax}`);