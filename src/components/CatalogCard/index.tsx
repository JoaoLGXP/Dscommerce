import './styles.css';
import computerImg from '../../assets/computer.png';

export default function CatalogCard() {
    return (
        <div className="dsc-catalog-card">
            <div className="dsc-catalog-card-image">
                <img src={computerImg} alt="Computador" />
            </div>
            <div className="dsc-catalog-card-price">
                <h3>R$ 5000,00</h3>
            </div>
            <div className="dsc-catalog-card-name-product">
                <h3>Computador Gamer XT</h3>
            </div>
        </div>
    );
}