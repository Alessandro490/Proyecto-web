import React, { Fragment } from "react";

class PageAñadir extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  

  render(){
      return(
          <Fragment>
          <section className="tab2">
              <div id="show-user" >
                  <div>
                  <table className="Tabla-user">
                      <thead className="thead-confi">
                          <tr>
                              <th>Foto</th>
                              <th>Usuario</th>
                              <th>Contraseña</th>
                              <th>Estado</th>
                              <th>Admi</th>
                              <th>Eliminar</th>
                              <th>Desactivar</th>
                          </tr>
                      </thead>

                      <tbody class="thead-user">
                        <tr>
                            <th>Pict</th>
                            <th>usuario</th>
                            <th>contraseña</th>
                            <th>Activo</th>
                            <th>true</th>
                            <th className="th-btn-garbage"><button className="btn-garbage"><i className="fas fa-trash-alt"></i ></button></th>
                            <th className="th-btn-garbage"><button className="btn-locked border-quitar "><i className="fas fa-ban"></i></button></th>
                        </tr>
                    </tbody>
                  </table>
                  </div>
                </div>

              <div id="zona-addU" >
                  <div className="container-add-user">
                    <div className="table-AddU">


                      <div id="inputs-add">
                         <div><h2 id="h2-add-user">Agregar Usuario</h2></div>
                           
                         <div className="btn-ajuste-user">
                          <label for="femail"></label>
                          <input  type="text"  name="femail" id="femail"  className="input-ajuste-user" placeholder="correo" minlength= "4" maxlength="20px" required/>
                         
                          
                          <label for="fuser"></label>
                          <input  type="text"  name="fuser" id="fuser"  className="input-ajuste-user" placeholder="Usuario" minlength= "4" maxlength="20px" required/>
                          
                          <label for="fpassword"></label>
                          <input type="password" className="input-ajuste-user" name="fpassword" id="fpassword" placeholder="Contraseña" minlength= "4"   maxlength="15" required/>
                   </div>
                    </div>

                      <div id="btn-config-user">
                          <div><h2 id="h2-type-user">Tipo de usuario</h2></div>
                        <div className="table-AddU " id="btnA">
                            <div className="div-btn-ajust-AdorTu" > <button className="btn-ajust-AdorTu"><h2>Admi</h2></button></div>
                            <div className="div-btn-ajust-AdorTu"><button className="btn-ajust-AdorTu"><h2>Tutor</h2></button></div>
                        </div>
                           <div id="div-agregar-user">
                               <button id="btn-agregar-user"><h2 id="h2-btn-agregar-user">Agregar</h2></button>
                           </div>
                      </div>
                    </div>
                  </div>

                  
                       <div className="container-add-user" id="container-add-user2" >
                           <div id="buscar-user"><h2>Buscar Usuario</h2></div>
                           <div className="buscabusca" >
                                  <label for="fuser"></label>
                                  <input  type="text"  name="fuser"  className="input-search-user" placeholder="Usuario" minlength= "4" maxlength="20px" required/>
                                 <div>
                                      <button id="btn-buscar"><h2>Buscar</h2></button>
                                 </div>
                           </div>
                       </div>
                  </div>
                  
          </section>
          </Fragment>
      )
  }
}

export default PageAñadir;