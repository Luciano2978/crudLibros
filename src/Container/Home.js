import "../Assets/css/Home.css";
import { useState, useContext } from "react";
import Contexto from "../Context/Contexto";




export default function Home(){


    const [ numeroPrimo, setNumero] = useState("");
    const [ identificador, setIdentificador ] = useState("");
    const { registro, modificar,eliminar ,mostrarNumero,numerosDivisibles} = useContext(Contexto);
   


    function iden(id){
        const ide = id;
        setIdentificador(ide)
    }

    const registrarNumero = async (e) => {
        e.preventDefault();
        await registro(numeroPrimo);
    }

    const modificarNumero = async (e) => {
        e.preventDefault();
        await modificar(identificador, numeroPrimo);
    }

    const eliminarNumero = async (e) => {
        e.preventDefault();
        await eliminar(identificador)
    }

    return(
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Biblioteca</h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Añadir Nuevo Libro</span></a>						
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"/>
                                            <label htmlFor="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>Numero</th>
                                    <th>Primo</th>
                                    <th>Divisible Por:</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                            {mostrarNumero.map((mstNumero) => ( 
                                <tr key={mstNumero.id}>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                                            <label htmlFor="checkbox1"></label>
                                        </span>
                                    </td>
                                    <td>{mstNumero.Numero}</td>
                                    <td>{mstNumero.Estado}</td>
                                    <td>{" " + mstNumero.NumeroDivisibles} </td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" onClick={() => iden(mstNumero.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" onClick={() => iden(mstNumero.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>    
                                ))} 
                            </tbody>
                        </table>
                    </div>
                </div>        
            </div>
            {/* <!-- Añadir nuevo Libro --> */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">						
                                <h4 className="modal-title">Añadir Numero</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Número</label>
                                    <input type="text" className="form-control" required onChange={(e) => setNumero(e.target.value) } />
                                </div>	
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-success" data-dismiss="modal" value="Añadir" onClick={registrarNumero}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Editar Libro */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">						
                                <h4 className="modal-title">Editar Numero</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Número</label>
                                    <input type="text" className="form-control" required onChange={(e) => setNumero(e.target.value) } />
                                </div>	
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-info" data-dismiss="modal" value="Guardar" onClick={modificarNumero}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">						
                                <h4 className="modal-title">Eliminar Numero</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <p>¿Estas Seguro que deseas Eliminar el Numero?</p>
                                <p className="text-warning"><small>Esta accion no se puede deshacer.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-danger" data-dismiss="modal" value="Eliminar" onClick={eliminarNumero}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )




}