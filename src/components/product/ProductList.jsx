import React from 'react'
import ProductItem from './ProductItem'; //Importamos o compoenente ProductItem.jsx pois ele será filho do ProductList. Pois os produtos devem ser filhos da lista.
import './ProductList.css';

function ProductList(props) { 
    const { products, onEdit, onDelete } = props; //Destructuring do objeto que passamos do 'Product.jsx' para a lista. Cada um representa os atributos que a lista recebe: 'products' que manda o 'estado dos produtos', 'onEdit' que serve para receber o (product) que vai ser editado, e 'onDelete' que serve para deletar o 'product' via (id). Sem destructuring teríamos que fazer assim: 
    /*
    const products = props.products
    const onEdit = props.onEdit
    const onDelete = props.onDelete 
    
    OBS: O destructuring cria variáveis com esses mesmos nomes para vc usar depois na renderização do return.*/

    return (
        <div className="product-list">

            {products.length === 0 && (
                <p>Nenhum produto cadastrado.</p>
            )} {/*Aqui temos uma renderização condicional usando operador lógico &&. Que diz: Se o estado dos 'products' não tiver nenhum, (&& em react = então faça: <p>Nenhum produto cadastrado.</p>) */} {/*OBS: Em react não usamos o 'if' ou 'else' antes da condição. */}

            {products.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))} {/*Aqui tem algo importante: Os dois blocos são separados, mesmo que dê products.length === 0 -> false, o 'map' vai rodar, a diferença é que se tiver produto no 'products' quando chegar no map ele vai renderizar, se não retorna a frase de erro. */} {/*E no map ele vai fazer 'loop' em cada produto, e em cada um ele vai criar o componente 'ProductItem' responsável pelos cards de produto. E vai mandar pra cada um as props: key, product, onEdit e onDelite. */} {/*OBS: quando ele manda 'product' para o ProductList ele está mandando os dados desse produto: {id: 1, name: "Mouse", price: "50", category: "Perifériocs"}. E as outras fora o key, são as funções pra deletar e editar o mesmo. */}
        </div>
    )
}

export default ProductList

//GUARDE PRA PESQUISAR DEPOIS: prop drilling..