import React, { Fragment } from "react";

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
      return(
          <Fragment>
                <section className="tab0" >
                    <h1>BIENVENIDOS</h1>
                        <article className="home-left">
                        </article>
    
                        <article className="home-rigth">
                            <h2 id="txt-admin">SISTEMA GESTOR DE LA WEB</h2>
                            <button type="button" id="btn-admin">ROL ADMINISTRADOR</button>
                        </article>
                </section>
          </Fragment>
      )
  }
}

export default PageHome;
