import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeroContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    
`

export const HeroWrap = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    
`

export const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    margin-top: 2.5rem;
    height: 452px;
`

export const HeroTitle = styled.h1`
    font-size: 65px;
    color: #252525;

    ::span {
        color: #fff;
    }
`

export const HeroDesc = styled.p`
    font-size:24px;
    color: #ccc;

`

export const HeroBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 77px;

`

export const HeroLink = styled(Link)`

    border-radius: 10px;
    background: #1E88E5;
    padding: 15px 50px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: #01bf71;
    }
`

export const From = styled.form`
    height: 65px;
    display:flex;
`

export const FormInput = styled.input`
    padding: 15px 50px;
    border-radius: 10px;

    ::placeholder {
        color: #ccc;
        font-size: 14px;
    }
`

export const HeroRight = styled.div`
    width: 50%;
`

export const HeroImg = styled.img`
    width: 100%;
`

export const HeroWork = styled.div`
    height: 275px;
    margin-top: -3rem;
`

export const Work = styled.img`
    height: 100%;
    width:100%;
`