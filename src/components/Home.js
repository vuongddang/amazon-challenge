import React from 'react'
import homeImg from '../images/home.jpg'
import './Home.css'
import { Product } from './Product'
export default function Home() {
    return (
        <div className="bg-gray-200">
            <img className="w-full -mb-10 sm:-mb-20 lg:-mb-40 xl:-mb-52 home__gradient" src={homeImg} alt="home" />
            <style jsx>{`
                    // TODO: configure postcss to compile styled-jsx
            `}</style>

            <div className="grid grid-cols-1 gap-6 px-4 pb-8 lg:grid-cols-2 xl:grid-cols-3">

                <Product key={1}
                    id="1"
                    title="Hape Pound & Tap Bench with Slide Out Xylophone - Award Winning Durable Wooden Musical Pounding Toy for Toddlers, Multifunctional and Bright"
                    price={25.62}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61HyZoM8ZqL._AC_SL1171_.jpg"
                />
                <Product key={2}
                    id="2"
                    title="Product 2"
                    price={25.62}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61HyZoM8ZqL._AC_SL1171_.jpg"
                />
                <Product key={3}
                    id="3"
                    title="Product 3"
                    price={25.62}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61HyZoM8ZqL._AC_SL1171_.jpg"
                />
                <Product key={4}
                    id="4"
                    title="Product 4"
                    price={25.62}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61HyZoM8ZqL._AC_SL1171_.jpg"
                />
            </div>

        </div>
    )
}
