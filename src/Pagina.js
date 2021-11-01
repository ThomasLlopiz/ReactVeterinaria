import React from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenus";
import Table from "./componentes/Table";
import Modal from "./componentes/Modal";

function Mascotas() {
    return (
        <div classNameName="container">
            <Nav/>
            <ActionsMenu/>
            <Table/>
            <Modal/>
        </div>
    );
}

export default Mascotas;


