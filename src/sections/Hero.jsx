import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Hero = () => {
  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span className='text-coral-red'>Puma</span> Shoes
        </h1>
        <p>Discover stylish Puma Arrivals, quality comfort and innovation for active life.</p>
        <Button label='Shop Now' iconURL={arrowRight} />

      </div>

    </section>
  )
}

export default Hero