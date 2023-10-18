// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
function sayHello(name = 'World'){
    if (typeof name !== 'string') return "Hello, World!"
    return `Hello, ${name}!`
}