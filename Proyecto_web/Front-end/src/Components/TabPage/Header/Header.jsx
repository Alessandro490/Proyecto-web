import React, { Fragment } from "react";
import {NavLink, withRouter}  from 'react-router-dom';

class Header extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' :
    '';
  }

  render(){
      return(
          <Fragment>
            <header className="tab-header">        
                <nav>
                    <ul className="lbl-menu">
                        <li className= {this.getNavLinkClass("/")}><NavLink to="/"><i className="fas fa-home"></i></NavLink></li>
                        <li className= {this.getNavLinkClass("/SALAS")}><NavLink to="/SALAS">SALAS</NavLink></li>
                        <li className= {this.getNavLinkClass("/AÑADIR")}><NavLink to="/AÑADIR">AÑADIR PERSONAL</NavLink></li>
                        <li className= {this.getNavLinkClass("/ESTADISTICAS")}><NavLink to="/ESTADISTICAS">ESTADISTICAS DE USO</NavLink></li>
                        <li className= {this.getNavLinkClass("/AVATARS")}><NavLink to="/AVATARS">AVATARS</NavLink></li>
                        <li className= {this.getNavLinkClass("/FONDOS")}><NavLink to="/FONDOS">FONDOS</NavLink></li>
                        <li className= {this.getNavLinkClass("/INICIO")}><NavLink to="/INICIO">INICIO</NavLink></li>


                        <div id="contenedor-avatarUser">
                            <div id="avatar-usuario-btn">                      </div>

                            <label id="user-btn"  className= {this.getNavLinkClass("/USUARIO")}><NavLink to="/USUARIO">USUARIO</NavLink></label>
                        </div>
                    </ul>
                </nav>
            </header>


          </Fragment>

      )
  }
}
Header = withRouter(Header);
export default Header;