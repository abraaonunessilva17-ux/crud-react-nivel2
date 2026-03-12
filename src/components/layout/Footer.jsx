import React from 'react';
import './Footer.css'; //Importei o css do componente Footer.jsx.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Estamos importando isso que permite usar os ícones do FontAwesome no Footer. FontAwesomeIcon é a tag que permite isso.

export default props => (
    <footer className="footer">
        <span>
            Desenvolvido com
                <FontAwesomeIcon icon="brain" className="text-danger mx-1"/>por <strong> Abra<span className="text-danger">ã</span>o</strong>
        </span> {/*Poderíamos ter envolvido tudo isso em uma tag div, mas usamos <span> porque ele cobre somente o coneúdo interno e não todo o espaço à volta, isso ajuda no CSS.*/} {/*Note que usamos dentro de <span> a tag <FontAwesomeIcon> para inserir um ícone do fontAwesome. Já 'text-danger' é classe do Bootstrap para deixar texto em vermelho. E mx-1 serve para dar um espaçamento de 1px do ícone para as palavras.*/}
    </footer>
)