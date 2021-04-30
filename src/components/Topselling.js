import React from 'react'
import i1 from '../images/1.jpg';
import i2 from '../images/1.2.jpg';
import i3 from '../images/1.3.jpg';
import i4 from '../images/1.4.jpg';
import i5 from '../images/1.5.jpg';
import i6 from '../images/1.6.jpg';

const topselling = () => {
    return (
        <>
        <div className="mx-10 p-2 bg-gray-100 mt-4">
            <span className="text-xl">Top selling items</span>
        <div className="grid grid-flow-row grid-cols-6 gap-2 pt-4 ">
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
        </div>
        </>
     
    )
}

export default topselling
