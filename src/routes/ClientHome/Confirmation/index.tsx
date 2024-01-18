/* eslint-disable react-hooks/exhaustive-deps */
import './styles.css';
import { useEffect, useState } from 'react';
import { OrderDTO } from '../../../models/order';
import { useParams } from 'react-router-dom';
import * as orderService from '../../../services/order-service';
import ButtonInverse from '../../../components/ButtonInverse';
import { Link } from 'react-router-dom';

export default function Confirmation() {

    const params = useParams();

    const [order, setOrder] = useState<OrderDTO>();

    useEffect(() => {
        orderService.findByIdRequest(Number(params.orderId))
            .then(response => {
                setOrder(response.data);
            })
    }, [])

    return (
        <main>
            <section id="confirmation-section" className="dsc-container">
                <div className="dsc-card-confirmation">
                    {
                        order?.items.map(item => (
                            <div key={item.productId} className="dsc-shopping-container dsc-border-bottom">
                                <div className="dsc-shopping-details">
                                    <img src={item.imgUrl} alt={item.name} />
                                    <div className="dsc-product-name-and-quantity">
                                        <h3 className="dsc-name">{item.name}</h3>
                                        <div className="dsc-quantity-container">
                                            <div className="dsc-quantity">{item.quantity}</div>
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
                            <h3>R$ {order?.total.toFixed(2)}</h3>
                        </div>
                    </div>
                </div>
                <div className="dsc-order-confirmation">
                    <h3>Pedido realizado! Número {order?.id}</h3>
                </div>
                <Link to="/">
                    <div className='dsc-btns'>
                        <ButtonInverse text='Início' />
                    </div>
                </Link>
            </section>
        </main>
    );
}

