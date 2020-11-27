import React, { Fragment } from "react";
import LogoPMIEF from '../../../IMG/Logos/PMIEF_Logo.png';
import LogoUCA from '../../../IMG/Logos/UCA.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
      return(
          <Fragment>
            <footer>
                <img className="logoempresa" src={LogoPMIEF} alt="Logo PMIEF"/>
                <img className="logoempresa" src={LogoUCA} alt="Logo UCA"/>
                <p id="TOWER">TOWER GAME</p>
            </footer>
          </Fragment>
      )
  }
}

export default Footer;
