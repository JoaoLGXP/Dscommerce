/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles.css";
import * as cartService from "../../../services/cart-service";
import { OrderDTO } from "../../../models/order";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Cart() {

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart);

    function handleClearClick() {
        cartService.clearCart();
        setCart(cartService.getCart());
    }

    function handleIncreaseItem(productId: number) {
        cartService.increaseItem(productId);
        setCart(cartService.getCart());
    }

    function handleDecreaseItem(productId: number) {
        cartService.decreaseItem(productId);
        setCart(cartService.getCart());
    }

    return (
        <main>
            <section id="cart-section" className="dsc-container">
                {
                    cart.items.length === 0
                        ? (
                            <div className="dsc-section-title ">
                                <h2>Seu carrinho está vazio</h2>
                            </div>
                        )
                        : (
                            <div className="dsc-cart">
                                {
                                    cart.items.map(item => (
                                        <div key={item.productId} className="dsc-shopping-container dsc-border-bottom">
                                            <div className="dsc-shopping-details">
                                                <img src={item.imgUrl} alt={item.name} />
                                                <div className="dsc-product-name-and-quantity">
                                                    <h3 className="dsc-name">{item.name}</h3>
                                                    <div className="dsc-quantity-container">
                                                        <button onClick={() => handleDecreaseItem(item.productId)} className="dsc-quantity-change-less">-</button>
                                                        <div className="dsc-quantity">{item.quantity}</div>
                                                        <button onClick={() => handleIncreaseItem(item.productId)} className="dsc-quantity-change-more">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dsc-price space-top">
                                                <h3>R$ {item.subTotal.toFixed(2)}</h3>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="dsc-shopping-total">
                                    <div className="dsc-price">
                                        <h3>R$ {cart.total.toFixed(2)}</h3>
                                    </div>
                                </div>
                            </div>
                        )

                }
                <div className="dsc-btns">
                    <button className="dsc-btn dsc-btn-blue">Finalizar pedido</button>
                    <Link to="/catalog">
                        <button className="dsc-btn dsc-btn-white">Continuar comprando</button>
                    </Link>
                    <button onClick={handleClearClick} className="dsc-btn dsc-btn-blue">Limpar carrinho</button>

                </div>
            </section>
        </main>
    );
}