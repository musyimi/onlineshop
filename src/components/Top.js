import React from 'react'
import { GiFallingStar } from 'react-icons/gi';
import { GiPoliceBadge } from 'react-icons/gi';


const top = () => {
    return (
        <div>
            <ul className="flex justify-center bg-gray-300 bg-opacity-40 p-2 space-x-2">
                <li className="flex items-center space-x-1"><GiFallingStar/><span>Food</span></li>
                <li className="flex items-center space-x-1"><GiPoliceBadge/><span>Pay</span></li>
            </ul>
        </div>
    )
}

export default top;
