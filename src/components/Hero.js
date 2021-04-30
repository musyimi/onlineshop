import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { MdContentCut } from 'react-icons/md';
import { AiFillBank } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { MdComputer } from 'react-icons/md';
import { RiComputerFill } from 'react-icons/ri';
import { RiShirtFill } from 'react-icons/ri';
import { RiGamepadFill } from 'react-icons/ri';
import { FaBaby } from 'react-icons/fa';
import { FaFootballBall } from 'react-icons/fa';
import { GiPorcelainVase } from 'react-icons/gi';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { GiReturnArrow } from 'react-icons/gi';
import { IoMdCash } from 'react-icons/io';
import image from '../images/gorofa.jpg';








const hero = () => {
    return (
        <>
        <div className=" grid grid-flow-col grid-cols-4 grid-rows-1 auto-cols-max  gap-4 mx-10">
            <div>
                <ul className="space-y-2 p-4 bg-gray-100  rounded">
                    <li className="relative flex items-center space-x-2 text-2xl">
                        <AiFillApple/>
                    <span className="text-sm hover:text-pink-500 ">Supermarket</span>
                    <div className="absolute  left-32 top-0 bg-gray-300 p-2 text-sm">
                        <ul>drinks</ul>
                        <ul>drinks</ul>
                        <ul>drinks</ul>
                        <ul>drinks</ul>
                        <ul>drinks</ul>
                    </div>
    
                    </li>
                    <li className="flex items-center space-x-2 text-2xl"><MdContentCut/><span className="text-sm hover:text-pink-500">Health & beauty</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><AiFillBank/><span className="text-sm hover:text-pink-500">Home and Office</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><BsPhone/><span className="text-sm hover:text-pink-500">Phones and Tablets</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><MdComputer/><span className="text-sm hover:text-pink-500">Computing</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><RiComputerFill/><span className="text-sm hover:text-pink-500">Electronics</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><RiShirtFill/><span className="text-sm hover:text-pink-500">Fashion</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><RiGamepadFill/><span className="text-sm hover:text-pink-500">Gaming</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><FaBaby/><span className="text-sm hover:text-pink-500">Baby Products</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><FaFootballBall/><span className="text-sm hover:text-pink-500 ">Sporting Goods</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><GiPorcelainVase/><span className="text-sm hover:text-pink-500">Gardens and Outdoors</span></li>
                    <li className="flex items-center space-x-2 text-2xl"><AiFillInfoCircle/><span className="text-sm hover:text-pink-500">Other categories</span></li>
                </ul>
            </div>
            <div className=" col-start-2 col-span-2 row-span-1 ">
                <span className="h-full w-full">
                <img  src={image} alt="hero"/>
                </span>
                
            </div>
            <div className="col-start-4 col-span-1 space-y-4">
                <div className="p-4 bg-gray-100 rounded">
                    <ul className="space-y-3 ">
                        <li className="flex items-center space-x-2 ">< BsQuestionCircle /><span className="grid">HELP CENTER<span className=" text-xs ">Guide To Customer Care</span></span></li>
                        <li className="flex items-center space-x-2 ">< GiReturnArrow/><span className="grid">EASY RETURN<span className=" text-xs ">Quick Refund</span></span></li>
                        <li className="flex items-center space-x-2 ">< IoMdCash/><span className="grid">SELL ON LUMIA<span className=" text-xs ">Millions Of Visitors</span></span></li>
                    </ul>
                </div>
                <div>
                   <img src={image} alt="hero"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default hero;
