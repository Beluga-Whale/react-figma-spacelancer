import React from 'react'
import Img1 from '../../images/cate.svg'
import {
  CateContainer,
  CateContent,
  CateImg,
  CateBtn,
  CateBtnLink
}from './CategoryElements'

const Category = () => {
  return (
    <>
      <CateContainer>
        <CateContent>
          <CateImg src={Img1} />
        </CateContent>
        <CateBtn>
          <CateBtnLink to='/' >More Categories</CateBtnLink>
        </CateBtn>
      </CateContainer>
    </>
  )
}

export default Category