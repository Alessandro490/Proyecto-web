import React, { Fragment } from "react";


class PageEstadisticasUso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
      return(
          <Fragment>
                <section className="tab3">
                    <article className="contendor-estadisticas">
                        <h2 id="txt-uso">Uso diario del Juego</h2>
                        <div id="graficos1">Grafico de Barras</div>
                        <div id="graficos2">Grafico de Pastel</div>
                        <div id="graficos3">Grafico de Lineas</div>
                        <div id="graficos4">Grafico de Algo mas</div>
                    </article>
                </section>
          </Fragment>
      )
  }
}

export default PageEstadisticasUso;