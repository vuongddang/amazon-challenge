import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import {getBasketTotal} from '../reducer'

export default function Subtotal() {
    const [{ basket }] = useStateValue()

    return (
        <div className="flex flex-col w-80">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <span className="font-semibold">{value}</span>
                        </p>
                        <label className="flex items-center mt-2"><input className="form-checkbox" type="checkbox" /> <span className="ml-2">This order contains a gift</span></label>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button type="button" className="btn-primary mt-4">Proceed to Checkout</button>
        </div>
    )
}
