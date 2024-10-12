import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import { bigShoe1 } from '../assets/images'

const Hero = () => {
  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-green-600'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relativez-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-green-600 inline-block mt-3'>Puma</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ma'>Discover stylish Puma Arrivals, quality comfort and innovation for active life.</p>
        <Button label='Shop Now' iconURL={arrowRight} />
        <div className='flex justify-start 
        items-start flex-wrap w-full gap-4 mt-16'>
          {statistics.map((stat)=>(
            <div key={stat.label}>
            <p className='text-4xl font-palanquin font-bold' >{stat.value}</p>
            <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <img 
        src={bigShoe1}
        alt="" 
        />
      </div>

    </section>
  )
}

export default Hero