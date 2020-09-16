import React from 'react'
import { REMOVE_FROM_BASKET } from '../reducer'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({ item }) {

    const [{ basket }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: REMOVE_FROM_BASKET,
            item: item
        })
    }
    return (
        <div className="flex items-center p-4 bg-white border-b border-gray-200 ">
            <img className="object-contain mt-4 max-h-20" src={item.image} alt="" />
            <div className="ml-4">
                <p className="font-semibold">{item.title}</p>
                <p className="mt-2">
                    <span className="text-sm">$</span>
                    <span className="font-semibold">{item.price}</span>
                </p>
                <div>
                    {
                        Array(item.rating).fill().map((e) => (
                            <span role="img" aria-label="star">⭐</span>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket} className="mt-2 btn-primary" >Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
