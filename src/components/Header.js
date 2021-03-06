import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
function Header() {

    const [{ basket }] = useStateValue();

    return (
        <div className="flex  items-center h-12 bg-gray-900 sticky">
            <Link to="/">
                <img className="w-20 pt-3 mx-4 object-contain" src='http://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='logo' />
            </Link>
            <div className="flex flex-1 h-6 rounded-lg">
                <input type="text" className="flex-1 h-6 border-none outline-none p-2" />
                <SearchIcon className="bg-orange-primary h-6 p-1" />
            </div>
            <div className="flex items-center text-white space-x-2 ml-2 h-6 leading-3">
                <Link to="login" className="flex flex-col px-2">
                    <span className="text-xxs text-gray-300">Hello Guest</span>
                    <span className="text-xs font-extrabold">Sign in</span>
                </Link>
                <Link to="/" className="flex flex-col justify-center px-2">
                    <span className="text-xxs text-gray-300">Returns</span>
                    <span className="text-xs font-extrabold">& Orders</span>
                </Link>
                <Link to="/" className="flex flex-col justify-center px-2">
                    <span className="text-xxs text-gray-300">Your</span>
                    <span className="text-xs font-extrabold">Prime</span>
                </Link>
            </div>
            <Link to="/checkout" className="flex items-center text-white mx-2">
                <ShoppingBasketIcon className="mx-2" />
    <span className="text-xs font-extrabold text-white">{basket.length}</span>
            </Link>
        </div>
    )
}

export default Header
