import './styles.css';
import homeIcon from '../../assets/home.svg';
import productsIcon from '../../assets/products.svg';

export default function HeaderAdmin() {

    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <h1>DSC Admin</h1>
                <div className="dsc-navigation-bar-admin">
                    <div className="dsc-home-icon">
                        <img src={homeIcon} alt="Inicio"/>
                            <p className="dsc-menu-item-active">Início</p>
                    </div>
                    <div className="dsc-products-icon">
                        <img src={productsIcon} alt="Produtos"/>
                            <p>Produtos</p>
                    </div>
                    <div className="dsc-admin-login">
                        <p>Maria Silva</p>
                        <a href="#">Sair</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}