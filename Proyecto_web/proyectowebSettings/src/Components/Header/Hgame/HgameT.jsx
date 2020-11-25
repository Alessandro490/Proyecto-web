import React, { Component } from 'react'






class HgameT extends Component {
    constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = { counter: "" };
      }
    cronometro() {
        console.log("hola vengo de cronometro");
        let contador_s =0;
        let contador_mn = 0;
        let contador_h =0;
        var hora = "00";
        var minuto = "00";
        var segundo = "00";
       
        console.log("fuera del set interval");
        let thisfake = this;
        window.setInterval(
            function(){
                if(contador_s===60){
                    contador_s = 0;
                    contador_mn ++;
                    if(contador_mn >59){
                    contador_mn =0;
                    contador_h++;
                    hora = contador_h;
                    }
                    minuto = contador_mn;
                }
            segundo = contador_s;
            contador_s++;
            console.log("Hola vengo del set interval");
            thisfake.setState({
                counter: `${hora}:${minuto}:${segundo}`,
            });
       },1000);    
    }
  
    componentDidMount(){
        this.cronometro();
    }

    render() {
        return (
            <header className="header-puntuacion">
         
         <nav>
                
         <div className="puntuacion">
               

         <h2>PUNTUACION</h2>
         <div className="puntuacion2"><p >
               <h2>CRONOMETRO</h2>
               <span className="cronomet">{ this.state.counter } </span>
              

                </p></div>
                
                 <div className="puntuacion2">
                     <span><img src="#" alt=""/></span><h2>Encargado </h2>
                 </div>

            </div>
            </nav>
         <script src="../../"></script>
        </header>
        
        )
    }
}

export default HgameT

