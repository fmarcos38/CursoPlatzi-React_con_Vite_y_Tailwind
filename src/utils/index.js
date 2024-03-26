/**
 * funcion para sumar el total de una compra/orden
 * @param {Array} recibe un array de prods
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
    let tot = 0;
    products.forEach(prod => tot += prod.price);
    return tot;
};