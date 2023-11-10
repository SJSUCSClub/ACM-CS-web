import React from 'react'
import Link from 'next/link'

const LinkCard = ({ path, pathName, scroll }) => {

  return (
    <div className={`px-4 py-2 hover:bg-[#eabc4e] transition duration-200 rounded-md`}>
      <Link href={path} className={`${scroll ? 'text-[#196096]' : 'text-[#f5f8f1]'} text-sm font-normal`}>{pathName}</Link>
    </div>
  )
}

export default LinkCard