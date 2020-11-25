import React, { Fragment } from "react";
import CreateSala from "./CreateSala";

class FigurasPack extends React.Component {
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
          <section className="tabConfiguracionPack">

            <article className="contenedor-left"> 

                        <div className=" contenedores-packs">
                        </div>

                        <div className=" contenedores-packs">
                        </div>

                        <div className=" contenedores-packs  mg-top">
                        </div>

                        <div className=" contenedores-packs mg-top">
                        </div>

            </article>



            <div className="contenedor-rigth">
              <article className="contenedor-rigthInterno">
                <h2 className="txt-tempo">Configuraciòn de Temporizador</h2>
                  <input type="datetime-local" className="Establecer-fecha"/>
              </article>

                <article className="contendor-internoMedio mg-top">
                    <input className="input-enlace" type="text" placeholder="CODIGO"/>
                    <button  type="submit" className="btn-copiar">
                        COPIAR
                    </button>
                </article>

              <button className="btn-confiSala mg-top"  onClick={this.handleLogin}>
                ACEPTAR
              </button>


            </div>
          </section>
          </Fragment>
      )
  }
  else {
    return (
        <div>
          <CreateSala/>
        </div>
        )    }
  }
  }


export default FigurasPack;
