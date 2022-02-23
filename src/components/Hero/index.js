import React from 'react'
import ImgR from '../../images/Working remotely.svg'
import ImgG from '../../images/Work.svg'
import {
    HeroContainer,
    HeroWrap,
    HeroLeft,
    HeroTitle,
    HeroDesc,
    HeroBtn,
    HeroLink,
    From,
    FormInput,
    HeroRight,
    HeroImg,
    HeroWork,
    Work

} from './HeroElements'

const Hero = () => {
    return (
        <>
            <HeroContainer id="/" >
                <HeroWrap>
                    <HeroLeft>
                        <HeroTitle>Are you looking for Freelancers?</HeroTitle>
                        <HeroDesc>Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice</HeroDesc>
                        <HeroBtn>
                            <HeroLink to="/">Hire a freelancer</HeroLink>
                            <From>
                                <FormInput
                                    type="text"
                                    required placeholder="search freelance work" />

                            </From>
                        </HeroBtn>
                    </HeroLeft>
                    <HeroRight>
                        <HeroImg src={ImgR} />
                    </HeroRight>
                </HeroWrap>

                <HeroWork>
                    <Work src={ImgG} />
                </HeroWork>

            </HeroContainer>
        </>
    )
}

export default Hero