import React from "react";
import './ProductItem.css'; //Importamos o css do componente ProductItem.jsx.

function ProductItem(props) {
    const { product, onEdit, onDelete } = props; //Destructuring do objeto que passamos do 'ProductList.jsx' para o ítem. Cada um representa os atributos que o ítem recebe: 'product' que manda o 'os dados do produto', 'onEdit' que serve para receber o (product) que vai ser editado, e 'onDelete' que serve para deletar o 'product' via (id). Sem destructuring teríamos que fazer assim: 
    /*
    const product = props.product
    const onEdit = props.onEdit
    const onDelete = props.onDelete 
    
    OBS: O destructuring cria variáveis com esses mesmos nomes para vc usar depois na renderização do return.*/

    return (
        <div className="product-card">
            <h3>{product.name}</h3> {/*H3 mostra o 'nome' do produto que vem do campo input tipo 'nome' que criamos no ProductForm. */}
            <p>
                <strong>Categoria:</strong> {product.category || "Não informada"} {/*p mostra o 'categoria' do produto que vem do campo input tipo 'category' que criamos no ProductForm. OBS: Temos uma condição, se não tiver categoria mostra 'Não informada'.*/}
            </p>
            <p>
                <strong>Preço:</strong> R$ {product.price} {/*p mostra o 'preço' do produto que vem do campo input tipo 'price' que criamos no ProductForm.*/}
            </p>

            <div className="actions">
                <button className="edit" onClick={() => onEdit(product)}>
                    Editar {/*button tem um evento de onClick que recebe a função de 'editar' representada pela prop 'onEdit', função essa criada no Pai Products.jsx. E passamos o produto no parâmetro '(product)', pois o mesmo contém todos os dados pra ativar a função. */}
                </button>

                <button className="delete" onClick={() => onDelete(product.id)}>
                    Excluir {/*button tem um evento de onClick que recebe a função de 'deletar' representada pela prop 'onDelete', função essa criada no Pai Products.jsx. E passamos o produto no parâmetro '(product.id)', pois para ativar só precisamos do id do produto. */}
                </button>
            </div>

        </div>
    );
}

export default ProductItem;