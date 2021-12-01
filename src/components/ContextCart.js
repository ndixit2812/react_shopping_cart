import React, { useContext } from 'react';
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { cartContext } from './Cart';

const ContextCart = () => {

    const { item, clearCart, totalAmount, totalItem } = useContext(cartContext);


    if (item.length === 0) {
        return (
            <>
                <header>
                    <div className="continue-shopping">
                        <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                        <h3>Continue Shopping</h3>
                    </div>
                    <div className="cart-icon">
                        <img src="./images/cart.png" alt="cart" />
                        <p>0</p>
                    </div>
                </header>
                <section className="main-cart-section">
                    <h1>Shopping Cart</h1>
                    <p className="total-items">you have <span classname="total-items-count">0</span> items in shopping cart</p>
                    </section>
                </>
                )
    }
                return (
                <>
                    <header>
                        <div className="continue-shopping">
                            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                            <h3>Continue Shopping</h3>
                        </div>
                        <div className="cart-icon">
                            <img src="./images/cart.png" alt="cart" />
                            <p>{totalItem}</p>
                        </div>
                    </header>
                    <section className="main-cart-section">
                        <h1>Shopping Cart</h1>
                        <p className="total-items">you have <span classname="total-items-count">{totalItem}</span> items in shopping cart</p>

                        {/* container box where items deatails are shown */}
                        <div className="cart-items">
                            {/* inside container each div for each items details */}
                            <div className="cart-items-container">
                                <Scrollbars>
                                    {
                                        item.map((curItem) => {
                                            return <Items key={curItem.id} {...curItem} />
                                        })

                                    }
                                </Scrollbars>
                            </div>
                        </div>

                        <div className="card-total">
                            <h3>Cart total : <span>{totalAmount}</span></h3>
                            <button>CHECKOUT</button>
                            <button className="clear-cart" onClick={clearCart}>CLEAR CART</button>
                        </div>
                    </section>


                </>
                )
}

                export default ContextCart
