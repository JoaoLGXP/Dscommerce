import './styles.css';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';
import iconAdmin from '../../assets/admin.svg';
import * as authService from '../../services/auth-service';

export default function HeaderClient() {

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to='/'>
                    <h1>DSCommerce</h1>
                </Link>
                <div className="dsc-user">
                    {
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
                    <Link to='/login'>
                        <div className='dsc-login'>Entrar</div>
                    </Link>
                </div>
            </nav>
        </header>
    );
}