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
        { id: 1, name: 'Product A', price: 100, stock: 10 },
        { id: 2, name: 'Product B', price: 150, stock: 5 },
        { id: 3, name: 'Product C', price: 200, stock: 0 }
    ];
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}