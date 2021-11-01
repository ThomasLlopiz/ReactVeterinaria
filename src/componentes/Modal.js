import React from "react";

function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nueva Mascota</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form id="form">
                            <input type="hidden" id="indice"></input>
                            <div className="row">
                                <div className="col">
                                    <select id="tipo" className="form-select" aria-label="Default select example">
                                        <option selected>Tipo de animal</option>
                                        <option>Perro</option>
                                        <option>Gato</option>
                                        <option>Conejo</option>
                                        <option>Pajaro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input id="nombre" type="text" name="nombre" className="form-control" placeholder="Nombre"></input>
                                </div>
                                <div className="col">
                                    <select id="dueno" className="form-select" aria-label="Default select example">
                                        <option selected>Nombre de dueño</option>
                                        <option>Thomas</option>
                                        <option>Esteban</option>
                                        <option>Francisco</option>
                                        <option>Jeremias</option>
                                        <option>Camilo</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" id="btn-guardar" className="btn btn-primary" data-bs-dismiss="modal">
                            Crear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;