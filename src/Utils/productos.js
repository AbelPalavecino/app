const productos = [
    {
        id: 1,
        name: 'NFT 1',
        precio: 100,
        description: 'NFT Description',
        image: 'https://picsum.photos/200/300?image=1',
        stock: 3,
        category: 'Art'
    },
    {
        id: 2,
        name: 'NFT 2',
        precio: 200,
        description: 'NFT Description',
        image: 'https://picsum.photos/200/300?image=2',
        stock: 4,
        category: 'Art'
    },
    {
        id: 3,
        name: 'NFT 3',
        precio: 300,
        description: 'NFT Description',
        image: 'https://picsum.photos/200/300?image=3',
        stock: 5,
        category: 'visual'
    },
    {
        id: 4,
        name: 'NFT 4',
        precio: 300,
        description: 'NFT Description',
        image: 'https://picsum.photos/200/300?image=4',
        stock: 5,
        category: 'visual'
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