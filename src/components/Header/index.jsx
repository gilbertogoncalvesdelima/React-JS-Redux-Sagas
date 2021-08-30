import React, { useState } from "react";

import './styles.css'
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

const menu = [
    {
        label: "Catalogo",
        route: "/catalogo",
    },
    {
        label: "Pedido",
        route: "/pedido",
    },
    {
        label: "Administrador",
        route: "/administrador",
    },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <St.Container>
            <Navbar color="light" light expand="md" className={"navSize"}  >
                <NavbarBrand tag={Link} to="/">
                    Engenheiro Youtuber
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ml-auto" navbar>
                        {menu.map((menu) => (
                            <NavItem>
                                <NavLink tag={Link} to="/catalogo">
                                    {menu.label}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        </St.Container>
    );
};
export default Header;
