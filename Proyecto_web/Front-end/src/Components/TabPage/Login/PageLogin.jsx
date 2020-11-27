import React, { Fragment } from "react";

class PageLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="container-form">
          <div>
            <h3 className="header-3"> Iniciar sesion </h3>
          </div >
          <div className="container" >
          <form action="/INICIO" method="POST" className="form">
            <input type="text" name="name" id="" placeholder="usuario"  className="input-text" maxLength="20" />
            <input type="password" name="password" placeholder="password" className="input-password" maxLength="15"/>
            <button type="submit" className="button-sub">Aceptar</button>
          </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PageLogin;
