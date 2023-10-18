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