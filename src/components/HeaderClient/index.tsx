import './styles.css';
import cartIcon from '../../assets/cart.svg';

export default function HeaderClient() {

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <h1>DSCommerce</h1>
                <div className="dsc-user">
                    <div className="dsc-cart-icon">
                        <img src={cartIcon} alt="Carrinho" />
                    </div>
                    <a href="#">Entrar</a>
                </div>
            </nav>
        </header>
    );
}