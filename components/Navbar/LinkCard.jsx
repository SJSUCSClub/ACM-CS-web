import React from 'react'
import Link from 'next/link'

const LinkCard = ({ path, pathName }) => {


  return (
    <div className="px-4 py-2 hover:bg-[#eabc4e] transition duration-200 rounded-md">
      <Link href={path} className="text-[#196096] font-normal text-sm">{pathName}</Link>
    </div>
  )
}

export default LinkCard