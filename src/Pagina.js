import React from "react";
import Nav from "./componentes/nav/Nav";
import ActionsMenu from "./componentes/ActionsMenus";
import Table from "./componentes/Table";
import Modal from "./componentes/Modal";
function Mascotas() {
    return (
        <>
                <Nav />
                <ActionsMenu />
                <Table />
                <Modal />
        </>
    );
}

export default Mascotas;


