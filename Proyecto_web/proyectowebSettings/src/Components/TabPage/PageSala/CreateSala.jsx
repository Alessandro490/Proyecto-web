import React, { Fragment } from "react";
import ConfiguracionSala from "./ConfiguracionSala";

class CreateSalas extends React.Component {
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
             <div className="crear-salaContenedor">
                <button className="btn-agregar-sala" onClick={this.handleLogin}>
                    <i className="fas fa-plus-circle"></i>
                    
                </button>
             </div>
          </Fragment>
      );
  }
  else {
    return <ConfiguracionSala/>;
    }
  }
}
export default CreateSalas;
