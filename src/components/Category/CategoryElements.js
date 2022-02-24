import styled from 'styled-components'
import {Link} from 'react-scroll'

export const CateContainer = styled.div`
    height: 600px;
    max-width: 1200px
    margin: 0 auto;
    padding: 10rem;
`

export const CateContent = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width: 100%;
`

export const CateImg = styled.img`
    width: 100%;
`

export const CateBtn = styled.div`
    text-align:center;
    margin-top:3rem;

`

export const CateBtnLink = styled(Link)`
    padding:1rem 3rem;
    border-radius:10px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    background:#1E88E5;
    transition: .3s;

    &:hover {
        background: #01bf71;
    }
`