console.log('ejercicio 5 test')

const cambioPagoData =[
[300, 67, 89],
[40, 87, 47],
[78, 89, 19],
[850,598, 98]    
];

cambioPagoData.forEach(element =>{
    const cambio = cambioPago(element[0], element[1]);

    console.log(cambio === element[2] ? "✅" : "❌",
                cambio, " | " ,
                element[2]
                );
});