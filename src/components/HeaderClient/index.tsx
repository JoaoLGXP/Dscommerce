import './styles.css';
import cartIcon from '../../assets/cart.svg';
import { Link } from 'react-router-dom';

export default function HeaderClient() {

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to='/'>
                    <h1>DSCommerce</h1>
                </Link>
                <div className="dsc-user">
                    <div className="dsc-cart-icon">
                        <Link to='/cart'>
                            <img src={cartIcon} alt="Carrinho" />
                        </Link>
                    </div>
                    <Link to='/login'>
                        Entrar
                    </Link>
                </div>
            </nav>
        </header>
    );
}