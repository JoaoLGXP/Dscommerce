import "./styles.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/admin.svg";
import logo from "../../../src/assets/logo/logo icon.png"
import * as authService from "../../services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";
import LoggedUser from "../LoggedUser";

export default function HeaderClient() {

    const { contextTokenPayload } = useContext(ContextToken);

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to='/'>
                    <img className="dsc-logo-header" src={logo} alt="logo" />
                    <h1>DSCommerce</h1>
                </Link>
                <div className="dsc-user">
                    {
                        contextTokenPayload &&
                        authService.hasAnyRoles(['ROLE_ADMIN']) &&
                        <Link to="/admin">
                            <div className="dsc-admin-icon">
                                <img src={iconAdmin} alt="Admin" />
                            </div>
                        </Link>
                    }
                    <Link to='/cart'>
                        <div className="dsc-cart-icon">
                            <CartIcon />
                        </div>
                    </Link>
                    <LoggedUser />
                </div>
            </nav>
        </header>
    );
}