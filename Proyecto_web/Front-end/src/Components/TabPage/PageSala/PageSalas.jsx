import React, { Fragment } from "react";
import CreateSalas from "./CreateSala";

class PageSalas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
      return(
          <Fragment>
                <section className="tab1">
                    <div id="titulo-salas">
                        +SALAS
                    </div>
                    <div className="contenedor-salas">
                        
                        <CreateSalas/>
                        
                    </div>
                    <div className="contenedor-paginacion">
                        <button className="paginacion">1</button>
                        <button className="paginacion">2</button>
                        <button className="paginacion">3</button>
                        <button className="paginacion">4</button>
                        <button className="paginacion">5</button>
                    </div>
                </section>
          </Fragment>
      )
  }
}

export default PageSalas;

