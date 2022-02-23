import React from 'react'
import ImgL from '../../images/Group 13.svg'
import {
    InfoContainer,
    InfoWrap,
    InfoLeft,
    InfoImg,
    InfoRight,
    InfoTitle,
    InfoDesc,
} from './InfoElements'
const Info = () => {
    return (
        <>
            <InfoContainer id="find">
                <InfoWrap>
                    <InfoLeft>
                        <InfoImg src={ImgL} />
                    </InfoLeft>
                    <InfoRight>
                        <InfoTitle>
                            Find The Best
                            <span style={{color: "#1E88E5"}} > Freelancers </span>
                            Here
                        </InfoTitle>
                        <InfoDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare urna, cursus eget convallis. Feugiat imperdiet posuere justo, ultrices interdum
                            sed orci nunc, mattis. Ipsum viverra viverra neque adipiscing arcu, quam dictum. Dui mi viverra dui, sit accumsan, tincidunt massa. Dui cras magnis.</InfoDesc>
                    </InfoRight>
                </InfoWrap>
            </InfoContainer>
        </>
    )
}

export default Info