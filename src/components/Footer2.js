import React from 'react'
import { GrFacebookOption } from 'react-icons/gr';
import { ImInstagram } from 'react-icons/im';
import { FaYoutube } from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
import { RiMastercardLine } from 'react-icons/ri';
import { FaBitcoin } from 'react-icons/fa';



const Footer2 = () => {
    return (
        <>
        <div className="mx-10 flex space-x-56 p-4 bg-gray-400 ">
            <div className="space-y-4">
                <span>FOLLOW US ON</span>
                <ul className="flex space-x-4 text-xl text-gray-100">
                    <li><GrFacebookOption/></li>
                    <li><ImInstagram/></li>
                    <li><FaYoutube/></li>
                </ul>

            </div>
            <div className="space-y-4 ">
               <span>PAYMENT METHODS</span>
                <ul className="flex space-x-4 text-xl text-gray-100">
                    <li><RiVisaLine/></li>
                    <li><RiMastercardLine/></li>
                    <li><FaBitcoin/></li>
                </ul>

            </div>
        </div>
        </>
    )
}

export default Footer2
