import productos from "./productos";

const customFetch = (time, task) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(task);
        }, time)
    })
}

export default customFetch;

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(productos.find(producto => producto.id === id));
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(productos.filter(producto => producto.categoryId === categoryId));
        }, 500)
    })
}