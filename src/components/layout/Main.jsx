import React from 'react';
import Header from './Header'; //Importamos o componente Header.jsx mo Main.jsx porque ele ficará aqui.
import { library } from '@fortawesome/fontawesome-svg-core'; //Importamos em main a boblioteca de ícones do fontAwesome em Main, pois assim todos os componentes filhos dele podem ter acesso de forma mais simples.
import { faHome, faUser, faTrash, faPlus, faBrain } from '@fortawesome/free-solid-svg-icons'; //Com isso estamos importando para nosso projeto somente esses ícones.

library.add(faHome, faUser, faTrash, faPlus, faBrain); //Você está registrando esses ícones em uma biblioteca global. Isso permite que você use qualquer um deles em qualquer componente do seu site apenas chamando pelo nome (ex: icon="trash"), sem precisar importar o ícone novamente em cada arquivo.

export default props => (
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid"> {/*container-fluid: Classe/Bootstrap. Faz-conteúdo-toda-largura disponível, mas com um preenchimento suave nas laterais, adaptando-se a qualquer tamanho de tela.*/}
        <div className="p-3 mt-3"> {/*p-3 Adiciona-Padding-de nível 3 em todos os lados. Isso evita que o seu texto ou tabela fique colado nas bordas do site. mt-3: Adiciona uma Margin Top (margem superior). Isso garante um respiro entre o Header (que está logo acima) e o conteúdo.*/}
            {props.children} {/*{props.children} é uma propriedade especial do React, serve para exibir tudo o que você colocar dentro das tags 'filhas' do componente quando for usá-lo.*/}
        </div>
        </main>
    </React.Fragment>
)

//Teremos alguns outros componentes filhos do 'Main'. Os dados que os filhos do 'Main' tiverem serão passados para o 'Main' via props.children. É o contrário do que acontece com 'Header', pois nesse caso é o 'Main' que passa dados pro 'Header'. Ex: o arquivo 'Home.jsx' terá seu conteúdo que será passado para 'Main' via props.children.

//Inserimos {...props} em 'Header' para que esse componente receba as 3 propriedades que passamos para ele lá no arquivo 'App.jsx'. Pois Header está em 'Main', e no 'App.jsx' atribuímos essas props em Main, mas fazendo assim, é 'Header' quem as recebe.

//Usei React.Frament para juntar mais de um componente no 'export default'. 

//Além disso o Fragment é tipo uma embalagem que desaparece depois que você abre o presente. O React exige que você embrulhe o Header e o Main em alguma coisa, mas você não quer que essa 'embalagem' (a div) apareça no site e estrague o seu layout. O Fragment agrupa tudo e depois some!

//Usamos isso em vez de uma div, pois faremos o CSS com Bootstrap, e a div poderia quebrar o css.