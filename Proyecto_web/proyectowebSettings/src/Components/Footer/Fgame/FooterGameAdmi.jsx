import React, { Component } from 'react'



 class FooterGameAdmi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      }
    render() {
        return (
           
                <footer  className="footergame">
                <section id="container-rendirse">
               <div>
                <h2>Rendirse</h2>
                <button><h3>Enviar voto</h3></button>
               </div>
              
           </section> 
           <section id="container-ayuda">
            <div>
             <h2>Pedir ayuda</h2>
             <button><h3>Enviar Alerta</h3></button>
            </div>
           
        </section>
        <section id="container-tutor">
             
        <div id="container-tutor-div">
        <span> 
       
        </span>
        <div> 
             <h2>TUTOR</h2>
             <h4>usuario</h4> 
             </div>
               </div>
         </section>
         
         </footer>
           
        )
    }
}

export default FooterGameAdmi;
