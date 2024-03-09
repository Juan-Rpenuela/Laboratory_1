//Ejemplo de un evento en js con node js y en el que se "vende un producto"//
/*const EventEmitter = require('events');
const emisorProductos = new EventEmitter();


emisorProductos.on('compra', (total) => {
    console.log(`Se realizo una compra por $${total}`);
});

emisorProductos.emit('compra', 500);

//Promesas
const promesaCumplida = true;
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('Se ejecuto la promesa');
        } else { reject('No se ejecuto la promesa'); }
    }, 3000);
});

promesa.then(() => { console.log('Todo bien') });    
*/
//Pizaa ejemplo//

/*const statusPedido = () => {
    const status = Math.random() < 0.8;
    // console.log(status);
    return status;
}*/
/*for (let i = 0; i < 10; i++) {
    console.log(statusPedido());
}*/
/*
const PromesaPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (statusPedido()) {
            resolve('Pedido entregado');
        } else {
            reject('Pedido no entregado');
        }
    }, 3000);
});

const Promesacumplida = (Correcta) => {
    console.log(Correcta);
}
const PromesaRechazada = (Rechazo) => {
    console.log(Rechazo);
}
PromesaPedido.then(Promesacumplida).catch(PromesaRechazada);
*/

//Ejemplo de promesas con el ejemplo de la pizza//
function OrdenarPizza(pizza) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando:Pizza......`);
        setTimeout(() => {
            if (pizza === 'hawaiana' || pizza === 'peperoni' || pizza === 'mexicana') {
                resolve(`Estamos Ordenando tu pizza ${pizza}`);
            } else { reject(`Lo sentimos no esta disponible la orden`) }
            resolve(pizza);
        }, 2000);
    })
};
function procesarPedido(respuesta) {
    return new Promise((resolve) => {
        console.log(`Procesando respuesta "${respuesta}"....`);
        console.log(`Estamos preparando tu pizza.....`);
        setTimeout(() => {
            resolve(`Gracias por tu compra!`);
        }, 4000);
    });
};

/*OrdenarPizza('hawaiana')
    .then(respuesta => {
        console.log(`Respuesta recibida`);
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    });*/
async function Pedido(Pizza) {
    try {
        const respuesta = await OrdenarPizza(Pizza);
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}
Pedido('peperoni');