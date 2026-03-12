import React from 'react';
import Main from '../components/layout/Main'; //Importamos o componente Main. OBS: Dependendo se queremos manter a mesma id visual em todas as páginas de conteúdo do site, toda página de conteúdo como essa deve importar o 'Main', pois é um componente/template feito pra estilizar e adequar os conteúdos.

export default props => (
    <Main title="Home" icon="home">
       <div className="display-4">Bem Vindo!</div> 
            <hr /> {/*hr serve para criar uma linha entre a 'div' e o 'p' abaixo.*/}
            <p className="mb-0">Esse será um exercício de CRUD. O objetico é criar uma mini lista de produtos.</p>
    </Main>
)

//Note que em 'main' passamos duas propriedades: icon, title, essas foram passadas para o componente 'Header' que está em main.. Só um detalhe a lembrar, rs.

//A tag <div> serve para passarmos para o componente da página de conteúdo 'Home' um conteúdo, nesse caso um título escrito 'Bem Vindo!'. Note que ele escreveu esse 'título' usando: "display-4" e não uma tag h1! Ele escolheu essa classe Bootstrap pois é uma forma moderna de criar títulos. E alguns devs não gostam de usar mais de uma h1..

//Na tag 'p' temos: <p className="mb-0">, onde o 'mb-'0' significa Margin Bottom 0, ou seja, ele tira a margem de baixo para o texto não ficar empurrando o rodapé ou outros elementos.