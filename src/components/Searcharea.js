import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineDown } from 'react-icons/ai';




const searcharea = () => {
    return (
        <>
        <div className="flex justify-between mx-10 p-6">
            <div>
                <h1>Wamlambez</h1>
            </div>
            <div>
               <p>search</p>
            </div>
            <div >
                <ul className="flex space-x-16">
                    <li className="flex items-center">< BsPerson/><span className="ml-2 mr-1">Login</span><AiOutlineDown/> </li>
                    <li className="flex items-center">< BsQuestionCircle/><span className="ml-2 mr-1">Help</span><AiOutlineDown/></li>
                    <li className="flex items-center">< GiShoppingCart/><span className="ml-2 mr-1">Cart</span><AiOutlineDown/></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default searcharea;
