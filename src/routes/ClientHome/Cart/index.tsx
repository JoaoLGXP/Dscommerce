import "./styles.css";
import { useEffect, useState } from "react";
import * as cartService from "../../../services/cart-service";
import { OrderDTO, OrderItemDTO } from "../../../models/order";

const item1: OrderItemDTO = new OrderItemDTO(
    4, 1, "PC Gamer", 1200, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
)

const item2: OrderItemDTO = new OrderItemDTO(
    5, 2, "Rails for Dummies", 100.99, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
)

export default function Cart() {

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart);

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