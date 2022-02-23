import React from 'react'
import Img1 from '../../images/Free1.svg'
import Img2 from '../../images/Free2.svg'
import Img3 from '../../images/Free3.svg'

import {
    FreeContainer,
    FreeContent,
    FreeTitle,
    FreeH1,
    FreeItems,
    FreeImg
}from './FreeLancersElements'

const FreeLance = () => {
    return (
        <>
            <FreeContainer id="freelancers" >
                <FreeContent>
                    <FreeTitle>The latest freelance work!</FreeTitle>
                    <FreeH1>Recently Posted  <span style={{color: "#1E88E5"}} > Works </span> </FreeH1>
                </FreeContent>
                <FreeItems>
                    <FreeImg src={Img1} />
                    <FreeImg src={Img2} />
                    <FreeImg src={Img3} />
                </FreeItems>
            </FreeContainer>
        </>
    )
}

export default FreeLance