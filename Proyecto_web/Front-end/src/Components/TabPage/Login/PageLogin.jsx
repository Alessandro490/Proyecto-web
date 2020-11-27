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
            <h3> Iniciar sesion </h3>
          </div>
          <form action="/INICIO" method="POST">
            <input type="text" name="name" id="" placeholder="usuario" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Aceptar</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default PageLogin;
