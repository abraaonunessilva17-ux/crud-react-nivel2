import React, { useState, useEffect } from 'react'; //Immportamos o os estados 'useState' e 'useEffect'.
import Main from '../components/layout/Main'; //Importamos o componente Main. OBS: Dependendo se queremos manter a mesma id visual em todas as páginas de conteúdo do site, toda página de conteúdo como essa deve importar o 'Main', pois é um componente/template feito pra estilizar e adequar os conteúdos.
import ProductForm from '../components/product/ProductForm'; //Importamos o componente ProductForn que contém o formulário.
import ProductList from '../components/product/ProductList'; //Importamos o componente ProductList que contém a lista.
import { api } from '../services/api'; //Importamos o backend fictício para esse projeto.


export default function Product() {
    const [products, setProducts] = useState([]); //Estado que guarda os produtos.
    const [productToEdit, setProductToEdit] = useState(null); //Estado que guarda o produto selecionado para ser editado. OBS: Quando clicar no botão 'editar' no card do produto, ele vai receber daqui esse produto pra edição. OBS: Esse estado vai também para ProductForm.

    useEffect(() => { //useEffect aqui está de 'aviso', aqui ele avisa que quando a tela iniciar e o componente 'Products.jsx' carregar, ele deve acionar a função abaixo.
        loadProducts() //Ele ativa essa função de 'carregar produtos', que por sua vez faz uma request pro back e traz os produtos.
    }, []) //O array vazio [] indica que esse comando da 'loadProducts' deve ocorrer só uma vez. OBS: Sem 'useEffect' o 'loadProducts' não funcionaria.

    async function loadProducts() { //Função 'carregar produtos' que faz uma requisição para o banco API.
        const data = await api.list() //Guardamos em 'data' a chamada da requisição que pede a 'lista' do banco de dados API.
        setProducts(data); //Usamos essa lista que veio da API e que está em 'data' para ser o valor de 'setProducts', que por sua vez 'altera/inclui' essa lista no estado [Products]. Assim a lista que veio do back agora é incluída no estado.
    }

    function handleEdit(product) { //Função que serve para mandar o produto 'product' para ser editado, indo assim este para o estado 'productToEdit'. OBS: Esse 'product' vem do ProductList.jsx, quando se clica no botão 'editar' de um produto, ele mandará o mesmo para essa função.
        setProductToEdit(product); //setProductToEdit recebe esse 'product', e assim ele o 'altera'.
    }

    async function handleDelete(id) { //Função para 'deletar' o produto usando (id), que faz uma requisição para o banco API.
        await api.delete(id) //Chamada da requisição, onde solicitamos a função 'delete' que está no banco API.
        loadProducts(); //Invocamos a função 'carregar produtos' para que depois da 'exclusão' de um produto, possamos 're renderizar' a tela. 
    }

return(
    <Main icon="user" title="Crud"> {/*{Estamos passando essa props para o compoente 'Products'. E eles serão mostrados no Header dessa página.} */}
      <div className="display-4">CRUD!</div> 
           <hr /> {/*hr serve para criar uma linha entre a 'div' e o 'p' abaixo.*/}
           <p className="mb-0">Cadastro de usuários: Incluir, Listar, Alterar e Excluir!</p>

       <ProductForm
                productToEdit={productToEdit} onSaved={loadProducts} />  {/*Criamos esse atributo 'productToEdit' para mandar para o componente ProductForm o estado que guarda o 'produto que vai ser editado', pois este precisa 'preencher' os campos de input com os dados desse poduto. */} {/*criamos o atributo onSaved para mandar para ProductForm a função de 'carregar produtos', pois o mesmo precisa fazer isso. */}

       <ProductList products={products}
                onEdit={handleEdit}
                onDelete={handleDelete}
            /> {/*criei 3 atributos para mandar para o componete de lista: {products} que manda o 'estado dos produtos', {handleEdit} que serve para receber o 'product' que vai ser editado, e {handleDelete} que serve para deletar o 'product' via (id). */}
    </Main>
)
}
