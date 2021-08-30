import React, { useState } from "react";

import * as St from "./styled";

import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
} from "reactstrap";

import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };


    return (
        <St.Container>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/">
                    Engenheiro Youtuber
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/catalogo">
                                Catálogo
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/contato">
                                Contato
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/pedidos">
                                Pedidos
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/adm">
                                Adm
                            </NavLink>
                        </NavItem>

                        <NavItem></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </St.Container>
    );
};
export default Header;
