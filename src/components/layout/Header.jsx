import React from 'react'; 
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Estamos importando isso que permite usar os ícones do FontAwesome no Header. FontAwesomeIcon é a tag que permite isso.
import Nav from './Nav'; //Importamos o componente Nav.jsx porque ele ficará dentro do Header.jsx, pois nosso objetivo é que o menu fique dentro da barra do header, e não um menu lateral.

export default props =>(
    <header className="header d-none d-sm-flex "> {/*d-none = em celulares o cabeçalho não é mostrado.*/} {/*d-sm-flex = em tablets/dispositivos maiores o cabeçalho reaparece e todos os seus elementos ícone/subtítulo ficam em flex. */}
    <div className="d-flex flex-column px- ajusteDiv">{/*Div para organizar a h1 e p. d-flex é p deixar-flexbox. flex-column p deixar em coluna. px-4 é padding pra empurar pra longe das margens. */}
        <h1 className="mt-3 ajuste" > {/*mt-3 = valor Bootstrap de espaçamento. ajuste é a classe que eu passei pra ajustar no css do componente.*/} 
            <FontAwesomeIcon icon={props.icon} className="text-danger"/> 
            {props.title}{/*<FontAwesomeIcon > é a tag p mostrar-ícon-fontAwesome. O icon="home" mostra-ícone-inserido-App.jsx. E pode ser trocado lá. O {props.title} mostra-título-inserido-App.jsx.*/}
        </h1>
        <p className="subtitle"> 
            {props.subtitle} {/*Estamos puxando o texto do subitítulo vindo de App.jsx */}
          </p>
      </div>
      <Nav />
    </header>
)