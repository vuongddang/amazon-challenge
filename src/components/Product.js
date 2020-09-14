import React from 'react'

export const Product = ({ id, title, image, price, rating }) => {
    return (
        <div className="flex p-4 flex-col items-center justify-center bg-white z-10">
            <div className="h-24">
                <p>{title}</p>
                <p className="mt-1">
                    <span className="text-sm">$</span>
                    <span className="font-semibold">{price}</span>
                </p>
                <div>
                    {
                        Array(rating).fill().map((e) => (
                            <span role="img" aria-label="star">⭐</span>
                        ))
                    }
                </div>
            </div>
            <img className="max-h-52 object-contain" src={image} alt="" />
            <button className="btn-primary">Add to basket</button>

        </div>
    )
}

