const productos = [
    {
        id: 1,
        name: 'NFT 1',
        precio: 100,
        precio: 'NFT Description',
        image: 'https://picsum.photos/200/300?image=1',
        stock: 3

    },
    {
        id: 2,
        name: 'NFT 2',
        precio: 200,
        precio: 'NFT Description',
        image: 'https://picsum.photos/200/300?image=2',
        stock: 4

    },
    {
        id: 3,
        name: 'NFT 3',
        precio: 300,
        precio: 'NFT Description',
        image: 'https://picsum.photos/200/300?image=3',
        stock: 5

    }
];

const producto = {

    id: 1,
    name: 'NFT 1',
    precio: 100,
    description: 'NFT Description',
    image: 'https://picsum.photos/200/300?image=1',
    stock: 3
};

export default productos;


export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto);
        }, 1000);
    });
};