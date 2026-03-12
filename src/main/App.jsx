import React from 'react';
import './App.css'; //Importamos o arquivo 'App.css' desse componente mesmo. 
import { BrowserRouter } from 'react-router-dom'; //Importamos o Router aqui pois é mais comum.
import AppRoutes from './Routes'; //Importei o componente de Rotas que me permite ativar o Router.

/*import Main from '../components/layout/Main'; //Importei o componente Main.jsx, pois ele é um componente onde inserimos os 'conteúdos' é ele que passará os conteúdos via 'props' para esses componentes de conteúdo. MAIN FOI COMENTADO POIS O TROCAMOS POR APPROUTES ALÍ EM BAIXO.*/ 
import Footer from '../components/layout/Footer'; //Importamos o compoenente Footer.jsx para ser usada alí embaixo.
 
export default props => (
  <BrowserRouter>
    <div className="app">
      <AppRoutes />
      <Footer />
    </div>
  </BrowserRouter>
)

/*Como estava o <Main> dentro do export antes de importar o Router nele..
<Main title="Home" icon="home">
</Main>
*/

