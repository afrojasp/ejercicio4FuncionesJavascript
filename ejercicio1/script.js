let arreglos = [1,2,3,1]

function encrypt (arreglo, clave){
    arreglo.forEach((e,i) => {
        arreglo[i] = e + clave;
    });
    return arreglo;
}

function desencrypt (arreglo, clave){
    arreglo.forEach((e,i) => {
        arreglo[i] = e - clave;
    })
    return arreglo;
}

function secret(arreglo, funcion, clave){
    retornado = funcion(arreglo, clave);
    return retornado;
}

console.log('Entrada: ' + arreglos);
secret(arreglos, encrypt, 1)
console.log('Mensaje encriptado: ' + arreglos)
secret(arreglos, desencrypt, 1)
console.log('Mensaje desencriptado: ' + arreglos)
