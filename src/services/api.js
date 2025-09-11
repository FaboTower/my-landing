export const Auth = {
    async login({ username, password }) {
        await delay(500);
        if (username === 'admin' && password === 'admin') {
            return { id : 1, name: 'Administrator' };
        }
        throw new Error('Credenciales Invalidas');
    },
    async logout() {
        await delay(200);
        return true;    
    }
}

export async function listProducts() {
    await delay(500);
    return [
        { id: 1, title: 'Product A', price: 100, stock: 10, brand: 'Brand A', description: 'Description for Product A', image: 'https://via.placeholder.com/250' },
        { id: 2, title: 'Product B', price: 150, stock: 5, brand: 'Brand B', description: 'Description for Product B' },
        { id: 3, title: 'Product C', price: 200, stock: 0, description: 'Description for Product C', image: 'https://via.placeholder.com/250' },
        { id: 4, title: 'Product D', price: 250, stock: 20, brand: 'Brand D', description: 'Description for Product D', image: 'https://via.placeholder.com/250' }
        
    ];
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}