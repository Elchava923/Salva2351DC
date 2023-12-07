console.log('Ejercicio 6 test')

const supTrianData = [
    [56, 19, 88],
    [98, 24, 89],
    [23, 4, 67.5],
    [10, 6, 66]
];

supTrianData.forEach(element => {
    const superficie = Triangulo(element[0], element[1]);

    console.log(superficie === element[2] ? "🟢" : "❌", 
        superficie, " | ", 
        element[2] 
    );              
});