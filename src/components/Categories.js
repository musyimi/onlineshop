import React from 'react'

const categories = () => {
    return (
        <div className="mx-10">
            <ul className="grid grid-cols-4 gap-4">
                <li className="p-4 bg-gray-100 rounded">SmartPhones</li>
                <li className="p-4 bg-gray-300 rounded">Sneakers</li>
                <li className="p-4 bg-gray-300 rounded">Mens Fashion</li>
                <li className="p-4 bg-gray-300 rounded">Home Theatres</li>
            </ul>
        </div>
    )
}

export default categories;
