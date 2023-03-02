import React from 'react'
import CarouselAntDesign from './CarouselAntDesign'
import AboutAntDesign from './AboutAntDesign'
import CardAntDesign from './CardAntDesign'
import ModelAntDesign from './ModelAntDesign'
import CollapseAntDesign from './CollapseAntDesign'
import ListAntDesign from './ListAntDesign'

function HeroAntDesign() {
  return (
    <>
        <div className='main'>
            <CarouselAntDesign />
            <AboutAntDesign />
            <CardAntDesign />
            <ModelAntDesign />
            <CollapseAntDesign />
            <ListAntDesign/>
        </div>
    </>
  )
}

export default HeroAntDesign