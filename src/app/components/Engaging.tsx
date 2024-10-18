import React from 'react'
import engaging from '../../../public/engaging.webp'
import Image from 'next/image'

const Engaging = () => {
  return (
    <div className='py-12 md:py-24'>
        <Image src={engaging} alt='engaging'/>
    </div>
  )
}

export default Engaging