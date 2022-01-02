var add=(a,b)=>{
    return a+b
}
var sub=(a,b)=>{
    return a-b
}
var mul=(a,b)=>{
    return a*b
}
module.exports={add,sub,mul}
var file =require('./p2.js')
console.log("Addition is : ",file.add(5000, 6000))
console.log("Subtraction is :",file.sub(1000,200))
console.log("Multiplication is :",file.mul(55,27))