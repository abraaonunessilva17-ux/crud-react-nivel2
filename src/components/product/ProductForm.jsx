import { api } from '../../services/api'; //Importamos a API do backend fictício localstorage que criamos.
import React, {useState, useEffect} from 'react'; //Importamos o react e nele também os 'hooks' useState e useEffect. Sem useState o seu formulário é "morto". Você digita e o React não "sabe" o que está escrito. Com o useState, você cria uma ligação entre o que o usuário digita e uma variável no seu código.
import './ProductForm.css'; //Importamos o css do componente ProductForm.

function RenderizarForm(props) {
     const [product, setProduct] = useState({ name: '', price: '', category: ''}); //Criamos um estado que recebe os valores dos 3 inputs do form e os organiza em objeto.

     useEffect(() => {//useEffect está de 'vigia'
        if (props.productToEdit) { //Se a 'prop' productToEdit existir no Product.jsx..
            setProduct(props.productToEdit);
            //Funciona assim: Se clicarmos em editar um produto/card, esse produto vai para o 'Product.jsx' e ficará em um estado chamado 'productToEdit', esse objeto vem para cá pois ele é o que será editado, e aqui ele fica sendo o valor de 'setProduct'. Assim ele preenche os valores dos inputs inserindo neles os valores que vieram nesse objeto para editar.
        }
    }, [props.productToEdit]); //[props.productToEdit] serve apenas pra completar a sintaxe do 'useEffect', mas isso diz: Se tiver um objeto em 'productToEdit' lá no 'Product.jsx', então execute a função acima.

     const handleInputChange = (event) => { //Essa função serve para atualizar o valor dos campos inputs quando um usuário é editado.
        const { name, value } = event.target; //event.target são os inputs. Quer dizer que pode ser acionado por qualquer input, e isso alterará o 'value' do produto de acordo com o campo 'name', pois temos campo name, price e category.
        
        // Usamos o Spread Operator (...) para manter o que já tinha e mudar só o campo atual
        setProduct({ ...product, [name]: value }) //Aqui cofirmamos no estado 'product' a mudança. 
    }

    const handleSubmit = async (event) => { //Função que vai mandar os dados do formulario para o back do api.js.
        event.preventDefault(); //Impede a tela de recarrgar.
        
        if (!product.name || !product.price) { //Validação que diz: Se o campo 'name' estiver vazio ou o 'price' então mostre a frase abaixo. OBS: Não validamos o 'categoria' pq não é indispensável.
            alert("Preencha os campos obrigatórios!");
            return; //Encerra o código aqui.
        }

        //Lógica de decisão: Se o produto já tem um ID, ele veio do "Editar". Se não tem, é "Novo".
        if (product.id) { //Se produto tiver 'id'.
        await api.update(product.id, product); // Chama a função de atualizar/update do back
        alert("Produto atualizado com sucesso!");

        // Limpa o formulário após salvar
        setProduct({ name: '', price: '', category: '' });
        } 
        else {
        await api.create(product); // Envia o objeto prontinho para o localStorage. Aqui o produto é mandado pro back. OBS: Aqui invocamos a função 'create' que está no back, e tendo ela invocada aqui, ela salva o produto e o mando pro back.
        alert("Produto salvo com sucesso!");
        
        // Limpa o formulário após salvar
        setProduct({ name: '', price: '', category: '' });
        }

        props.onSaved(); //Avisa o componente pai 'Product.jsx' para atualizar a lista após criar ou editar um produto. OBS: Isso funciona pois no componente pai passamos para 'ProductForm' essa propriedade 'onSaved' que por sua vez manda a função 'loadProducts' que carrega os produtos.
    };

     return (
        <div className="divForm">
          <form className="form" onSubmit={handleSubmit}> {/*onSubmit invoca a função 'handleSubmit' que por sua vez traz a função de 'criar' usuário que está no back.*/}
            <input name="name" className="input" onChange={handleInputChange} value={product.name} placeholder="Nome do produto"></input> {/*name = "name" é o atributo que dá nome a esse campo, ele serve pra identificar qual input será editado na função {handleInputChange}.*/}{/*Em onChange, passei a função {handleInputChange} que serve pra alterar o valor que passamos nesse campo quando formos editar o produto.*/} {/*value={product.name} serve para dizer que o valor desse campo é o que foi digitado no 'name'.*/}

            <input name="category" className="input" onChange={handleInputChange} value={product.category} placeholder="Categoria do produto"></input>

            <input name="price" className="input" onChange={handleInputChange} value={product.price} placeholder="Preço do produto"></input>

            <button type="submit">Adicionar</button>
          </form>
        </div>
     )
}

export default RenderizarForm; //Quando trabalhamos com hooks escrevemos o export default do lado de fora da função/componente que nesse caso é 'renderizarFormulário'.