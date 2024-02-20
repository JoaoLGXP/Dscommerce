import "./styles.css";
import homeIcon from "../../assets/home.svg";
import productsIcon from "../../assets/products.svg";
import LoggedUser from "../LoggedUser";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {

    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <h1>DSC Admin</h1>
                <div className="dsc-navigation-bar-admin">
                    <NavLink
                        to="/admin/home"
                        className={({ isActive }) => isActive ? "dsc-menu-item-active" : "dsc-menu-item-notActive"}
                    >
                        <div className="dsc-home-icon">
                            <img src={homeIcon} alt="Inicio" />
                            <p>Início</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) => isActive ? "dsc-menu-item-active" : "dsc-menu-item-notActive"}
                    >
                        <div className="dsc-products-icon">
                            <img src={productsIcon} alt="Produtos" />
                            <p>Produtos</p>
                        </div>
                    </NavLink>
                    <LoggedUser />
                </div>
            </nav>
        </header>
    );
}