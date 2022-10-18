import "../Assets/css/Home.css";
import { useState, useContext } from "react";
import Contexto from "../Context/Contexto";




export default function Home(){


    const [ nombre, setNombre] = useState("");
    const [ autor, setAutor] = useState("");
    const [ edicion, setEdicion] = useState("");
    const [ identificador, setIdentificador ] = useState("");
    const { registro, libro, modificar,eliminar } = useContext(Contexto);


    function iden(id){
        const ide = id;
        setIdentificador(ide)
    }

    const registrarLibro = async (e) => {
        e.preventDefault();
        await registro(nombre,autor,edicion);
    }

    const modificarLibro = async (e) => {
        e.preventDefault();
        await modificar(identificador,nombre,autor,edicion);
    }

    const eliminarLibro = async (e) => {
        e.preventDefault();
        await eliminar(identificador);
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
                                    <th>Nombre</th>
                                    <th>Autor</th>
                                    <th>Edicion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {libro.map((libreria) => ( 
                                <tr key={libreria.id}>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                                            <label htmlFor="checkbox1"></label>
                                        </span>
                                    </td>
                                    <td>{libreria.Nombre}</td>
                                    <td>{libreria.Autor}</td>
                                    <td>{libreria.Edicion}</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" onClick={() => iden(libreria.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" onClick={() => iden(libreria.id)} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
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
                                <h4 className="modal-title">Añadir Libro</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" required onChange={(e) => setNombre(e.target.value) } />
                                </div>
                                <div className="form-group">
                                    <label>Autor</label>
                                    <input type="email" className="form-control" required onChange={(e) => setAutor(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Edicion</label>
                                    <textarea className="form-control" required onChange={(e) => setEdicion(e.target.value)}></textarea>
                                </div>			
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-success" value="Añadir" onClick={registrarLibro}/>
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
                                <h4 className="modal-title">Editar Libro</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" required onChange={(e) => setNombre(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Autor</label>
                                    <input type="email" className="form-control" required onChange={(e) => setAutor(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Edicion</label>
                                    <textarea className="form-control" required onChange={(e) => setEdicion(e.target.value)}></textarea>
                                </div>				
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-info" value="Guardar" onClick={modificarLibro}/>
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
                                <h4 className="modal-title">Eliminar Libro</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <p>¿Estas Seguro que deseas Eliminar el Libro?</p>
                                <p className="text-warning"><small>Esta accion no se puede deshacer.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-danger" value="Eliminar" onClick={eliminarLibro}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )




}