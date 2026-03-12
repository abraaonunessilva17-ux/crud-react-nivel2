//O main.jsx é o substituto do antigo index.css.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; //Já estáva importado o index.css.
import App from './main/App.jsx'; //Importo o App.jsx que está na pasta Main.
import 'bootstrap/dist/css/bootstrap.min.css'; //Importamos o bootstrap. O fontAwesome será importado lá no App.jsx.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//Note que referenciamos o 'App' no root.render, pois ele é o 'main' do projeto, ele chamará todos os outros componentes, e na 'index.html' tem uma <div> que receberá esse conteúdo todo por meior do App.jsx.
