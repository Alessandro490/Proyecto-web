import React, { Fragment } from "react";
import FigurasPack from "./FigurasPack";

class ConfiguracionSala extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  state = {
    login: false
  };

  handleLogin() {
    this.setState({
      login: true
    });
  }

  render() {
    if (!this.state.login) {
      return (
          <Fragment>
          <section className="tabConfiguracionSalas">

            <div className="contenedor-left"> 
              <article className="contenedor-leftInterno">
                  <h2 className="txt-nombreSala">ESCRIBA EL NOMBRE DE LA SALA</h2>
                  <label for="nameSala"></label>
                  <input  type="text"  name="nameSala" id="namesala"  className="input-nombre-sala" placeholder="NOMBRE" minlength= "4" maxlength="20" required/>
              </article>
            </div>



            <div className="contenedor-rigth">
              <article className="contenedor-rigthInterno">
                <h2 className="txt-Caducidad">FECHA DE CADUCIDAD DE LA SALA</h2>
                  <input type="datetime-local" name="nombreSala" value=""  className="Establecer-fecha"/>
              </article>

              <button className="btn-confiSala" name="nombreSala" type="submit" onClick={this.handleLogin}>
                ACEPTAR
              </button>
            </div>
          </section>
          </Fragment>
      )
  }
  else {
    return <FigurasPack/>
    }
  }
  }


export default ConfiguracionSala;
