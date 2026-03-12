//Esse é o local onde criaremos um banco de dados fictício/simulação para o projeto do CRUD.
const DB_KEY = 'crud_usuarios'; //É o nome da "etiqueta" da gaveta no navegador. Sem isso, o código não saberia onde guardou as informações.
const getDB = () => JSON.parse(localStorage.getItem(DB_KEY)) || []; // Pega o que está no localStorage e transforma em Objeto JS.
const saveDB = (data) => localStorage.setItem(DB_KEY, JSON.stringify(data)); //Pega o Objeto JS e transforma em Texto para salvar no localStorage.
export const api = {
    // Buscar todos os produtos
    list: () => {
        return Promise.resolve(getDB());
}, 

// Criar um novo produto
create: (product) => {
    const products = getDB();
    const newProduct = { ...product, id: Date.now() }; // ID único baseado no tempo
    products.push(newProduct);
    saveDB(products);
    return Promise.resolve(newProduct);
},

// Atualizar um produto existente
update: (id, updatedProduct) => {
    const products = getDB();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { ...updatedProduct, id };
        saveDB(products);
    }
    return Promise.resolve(products[index]);
},

// Deletar um produto
delete: (id) => {
    const products = getDB().filter(p => p.id !== id);
    saveDB(products);
    return Promise.resolve(true);
}
};