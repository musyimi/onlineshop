import React from 'react'
import i1 from '../images/1.jpg';
import i2 from '../images/1.2.jpg';
import i3 from '../images/1.3.jpg';
import i4 from '../images/1.4.jpg';
import i5 from '../images/1.5.jpg';
import i6 from '../images/1.6.jpg';
import { BsChevronRight } from 'react-icons/bs';

const Payday = () => {
    return (
        
         <>
        <div className="mx-10 p-4 bg-gray-200 mt-4 flex justify-between">
            <span className="font-semibold" >PAY DAY DEALS | Up to 50% Off</span>
            <span className="flex items-center">SEE ALL <span className="ml-2"><BsChevronRight/></span></span>
        </div>
        <div className="grid grid-flow-row grid-cols-6 gap-2 pt-4 mx-10">
            <card className="grid" >
                <img src={i1} alt="i1"/>
                <span>Umidigi a7</span>
                <span>Kshs 9,590</span>
                <span className="text-xs"><strike>kshs 15,590</strike></span>
            </card>
            <card className="grid" >
                <img src={i2} alt="i1"/>
                <span>Umidigi a7</span>
                <span>Kshs 9,590</span>
                <span className="text-xs"><strike>kshs 15,590</strike></span>
            </card>
            <card className="grid">
                <img src={i3} alt="i1"/>
                <span>Umidigi a7</span>
                <span>Kshs 9,590</span>
                <span className="text-xs"><strike>kshs 15,590</strike></span>
            </card>
            <card className="grid">
                <img src={i4} alt="i1"/>
                <span>Umidigi a7</span>
                <span>Kshs 9,590</span>
                <span className="text-xs"><strike>kshs 15,590</strike></span>
            </card>
            <card className="grid">
                <img src={i5} alt="i1"/>
                <span>Umidigi a7</span>
                <span>Kshs 9,590</span>
                <span className="text-xs"><strike>kshs 15,590</strike></span>
            </card>
            <card className="grid">
                <img src={i6} alt="i1"/>
                <span>Umidigi a7</span>
                <span>Kshs 9,590</span>
                <span className="text-xs"><strike>kshs 15,590</strike></span>
            </card>
        </div>
        
        </>
    )
}

export default Payday
