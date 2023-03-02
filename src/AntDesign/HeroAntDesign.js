import React from 'react'
import CarouselAntDesign from './CarouselAntDesign'
import AboutAntDesign from './AboutAntDesign'
import CardAntDesign from './CardAntDesign'
import ModelAntDesign from './ModelAntDesign'
import CollapseAntDesign from './CollapseAntDesign'

function HeroAntDesign() {
  return (
    <>
        <div className='main'>
            <CarouselAntDesign />
            <AboutAntDesign />
            <CardAntDesign />
            <ModelAntDesign />
            <CollapseAntDesign />
        </div>
    </>
  )
}

export default HeroAntDesign