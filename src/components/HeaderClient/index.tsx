import './styles.css';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';

export default function HeaderClient() {

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to='/'>
                    <h1>DSCommerce</h1>
                </Link>
                <div className="dsc-user">
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