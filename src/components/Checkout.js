import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className="px-4">
            <img src="" alt="" />
            {basket.length === 0 ? (
                <div className="mt-4">
                    <h2 className="font-semibold text-lg">Your Shopping Basket is empty</h2>
                </div>
            ) : (
                    <div className="mt-4">
                        <h2 className="font-semibold text-lg pb-2 border-b border-gray-200">Your Shopping Basket</h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct key={item.id}
                                    item={item} />
                            ))
                        }
                    </div>
                )}
        </div>
    )
}

export default Checkout
