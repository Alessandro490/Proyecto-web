import React from 'react'
//import Header from './Components/TabPage/Header'
import './index.scss'
//import Figuras from './Components/Figuras/Scene'
import GamePage from './Pages/GamePage/GameAd';
import Header from './Components/TabPage/Header/Header';
import Footer from './Components/TabPage/Footer/Footer';
import PageHome from './Components/TabPage/PageHome/PageHome';
import PageSalas from './Components/TabPage/PageSala/PageSalas';
import PageAñadir from './Components/TabPage/PageAñadir/PageAñadir';
import PageEstadisticasUso from './Components/TabPage/PageEstadisticas/PageEstadisticasUso';
import PageFondos from './Components/TabPage/PageFondo/PageFondos';
import { BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'




function App() {
  return (
    <div >
        <BrowserRouter>
          <div>
            <Header />
            
            <Route exact path="/" component={PageHome} />
            <Route exact path="/SALAS" component={PageSalas} />
            <Route exact path="/AÑADIR" component={PageAñadir} />
            <Route exact path="/ESTADISTICAS" component={PageEstadisticasUso} />
            <Route exact path="/AVATARS" component={PageAñadir} />
            <Route exact path="/FONDOS" component={PageFondos} />
            <Route exact path="/USUARIO" component={PageHome} />

          </div>
        </BrowserRouter>     
        
      <Footer/>
    </div>
  );
}

export default App;
