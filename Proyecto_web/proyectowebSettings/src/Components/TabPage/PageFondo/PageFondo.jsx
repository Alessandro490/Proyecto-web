import React, { Fragment } from "react";

class PageFondos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
      return(
          <Fragment>
                <section className="tab5">

                   <article className="contendor-fondos">
                        <h2 id="txt-fondos">CAMBIAR IMAGEN DE FONDO</h2>

                        <div id="fondo1"></div>

                        <div id="fondo2"></div>

                        <div id="fondo3"></div>

                        <div id="fondo4"></div>
                   </article>

                   <article className="contenedor-colores">
                        <h2 id="txt-colores">CAMBIOS COLORES DE ZONAS</h2>
                        <input id="pickerColor" type="color"/>
                   </article>
                
                </section>
          </Fragment>
      )
  }
}

export default PageFondos;
