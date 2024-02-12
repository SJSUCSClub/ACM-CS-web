import React from 'react'
import BgImages from './BgImages'
import image2 from '@/public/photos/sjsu-bg/sjsu2.jpg'
import Image from 'next/image'


const ImagePlayer = ({ index }) => {
  return (
    <div>
      {BgImages.map((image) => {
        return (
          <div
            key={index}
          >
            <Image src={image.image} width={1920} height={1080} className='bg-cover' />
          </div>
        )
      })}

    </div>
  )
}

export default ImagePlayer