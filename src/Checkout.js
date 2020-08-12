import React from 'react'
import { useStateValue} from './StateProvider'
import './Checkout'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img className='checkout___ad' src='' alt=''/>
            {basket?.length === 0 ? (
                <div>
                <h2>The basket is empty</h2>
                </div>
            ):(
                <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {basket?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}   
            </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <h1>Subtotal</h1>
                    <Subtotal />
                    </div>
            )}
        </div>
        
    )
}

export default Checkout
