import React from 'react';
import './Nav.css'; //Importamos o css do componente Nav.jsx;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Estamos importando isso que permite usar os ícones do FontAwesome nos links do Nav. FontAwesomeIcon é a tag que permite isso.
import {Link} from 'react-router-dom'; //Importamos { Link }, ele vem da biblioteca React Router. Quando instalamos o 'router' no nosso projeto ele cria vários componentes, um deles e o Link. E o que ele faz é substituir os links <a> que tinhamos logo abaixo dentro de <nav> pelos <Link> e <Link to> que são mais vantajosos, pois renderizam a tela sem 'recarregar' a página.

export default props => (
    <aside className="menu-area"> {/*aside é uma tag semântica, na real é uma div que diz aos buscadores do Google que isso é apenas uma barra lateral, e não conteúdo principal. */}
       <nav className="menu">
           <Link to="/">
           <FontAwesomeIcon icon="home" className="text-danger mx-1" />
           Home {/*FontAwesomeIcon = é a tag que recebe os efeitos do FontAwesome. E aqui teremos um ícone de 'home'. OBS: É melhor deixar o texto 'Home' fora da tag.*/}
           </Link>
           <Link to="/crud">
           <FontAwesomeIcon icon="user" className="text-danger mx-1" />
           Crud
           </Link>
       </nav>
    </aside>
)

//Acima criamos o componente Nav que é o que recebe os botões de navegação do site: Home e Dashboard de Tarefas.

//Inicialmente os criamos com links <a>, mas depois de importarmos o 'Router' para cá, trocaremos esses <a> por <Link> e <link to>.

//A tag 'nav' indica que aquele bloco contém links de navegação.

//<a>: São os links. Por enquanto, o (href="#/") é a Home (Raiz), o navegador entende que você quer ir para a página inicial do seu sistema. O (href="#/crud") é a rota do CRUD, ele avisa ao React: "O usuário quer ver o CRUD". Mas no futuro você provavelmente usará o react-router-dom para mudar de página sem recarregar o site. Note que assim que instalamos o {Link} que é um componente do 'router' no topo, nós substituímos os <a> para <Link> e <Link to>.

//Assim que trocamos <a> por <Link> e <Link to> nós tiramos os '#' que tinham nos links, ficavam antes das '/'.

//home: Desenha uma casinha para o link "Início". user: Desenha um ícone de bonequinho para a área de "CRUD".