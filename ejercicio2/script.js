let numA = 144
let numB = 36

var mcd = (a,b) => { return (a === b) ? a: mcd((a > b)?b:a, Math.abs(a-b))}

console.log(mcd(numA, numB))