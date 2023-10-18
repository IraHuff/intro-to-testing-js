// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
function sayHello(name = 'World'){
    if (typeof name !== 'string') return "Hello, World!"
    return `Hello, ${name}!`
}
function isFive(x){
    let y = parseFloat(x)
    if (y === 5) return true;
    return false
}
function isEven(n){
    let y = parseInt(n)
    if (isNaN(y) === true) {
        return false
    }else if (y % 2 === 0){
        return true
    }else return false
}
function isVowel(k){
    if (k === 'a') return true
    else if (k === 'A') return true
    else return false
}
function add(x,y){
    let a = parseInt(x)
    let b = parseInt(y)
    return a + b
}