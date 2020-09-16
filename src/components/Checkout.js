import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className="px-4">
            {basket.length === 0 ? (
                <div className="mt-8">
                    <h2 className="font-semibold text-lg">Your Shopping Basket is empty</h2>
                </div>
            ) : (
                    <div className="flex space-x-4 mt-4">
                        <div className="flex-1">
                            <h2 className="font-semibold text-lg pb-2 border-b border-gray-200">Your Shopping Basket</h2>
                            {
                                basket.map(item => (
                                    <CheckoutProduct key={item.id}
                                        item={item} />
                                ))
                            }
                        </div>

                        <div className="bg-gray-100 p-5 h-40">
                            <Subtotal />
                        </div>
                    </div>
                )
            }


        </div >
    )
}

export default Checkout
