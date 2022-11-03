
var fs = require('fs');
const path=require('path')
var fileName = process.argv[2] 
//|| path.join(__dirname,'sample_input','input1.txt') ;
if(fileName==null)
{
    fileName=path.join(__dirname,'test','input1.txt')
}
const lib=require('./allFunction')



function getResult(filename)
{
    let tr=lib.getData(filename)
    let sr=lib.coordinatesInNumber(tr)  
    let gr=200- lib.countEnergy(sr)
    return ('POWER '+gr)
}

let ouput=getResult(fileName)
console.log(ouput)
module.exports = { getResult };
