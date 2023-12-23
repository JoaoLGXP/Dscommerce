import "./styles.css";
import computerImg from "../../../assets/computer.png";

const cart = {
    items: [
        {
            productId: 4,
            quantity: 1,
            name: "PC Gamer",
            price: 1200,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
        },
        {
            productId: 5,
            quantity: 2,
            name: "Rails for Dummies",
            price: 100.99,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
        }
    ]
}

export default function Cart() {

    return (
        <main>
            <section id="cart-section" className="dsc-container">
                <div className="dsc-cart">
                    {
                        cart.items.map(item => (
                            <div key={item.productId} className="dsc-shopping-container dsc-border-bottom">
                                <div className="dsc-shopping-details">
                                    <img src={item.imgUrl} alt={item.name} />
                                    <div className="dsc-product-name-and-quantity">
                                        <h3 className="dsc-name">{item.name}</h3>
                                        <div className="dsc-quantity-container">
                                            <button className="dsc-quantity-change-less">-</button>
                                            <div className="dsc-quantity">{item.quantity}</div>
                                            <button className="dsc-quantity-change-more">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="dsc-price space-top">
                                    <h3>R$ {(item.price * item.quantity).toFixed(2)}</h3>
                                </div>
                            </div>
                        ))
                    }
                    <div className="dsc-shopping-total">
                        <div className="dsc-price">
                            <h3>R$ 15000,00</h3>
                        </div>
                    </div>
                </div>
                <div className="dsc-btns">
                    <button className="dsc-btn dsc-btn-blue">Finalizar pedido</button>
                    <button className="dsc-btn dsc-btn-white">Continuar comprando</button>
                </div>
            </section>
        </main>
    );
}