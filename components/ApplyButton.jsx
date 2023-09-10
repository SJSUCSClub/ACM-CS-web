import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ApplyButton = () => {
  const [click, setClick] = useState(false)
  const [visibleItems, setVisibleItems] = useState([]);

  const applications = [
    {
      name: "General Member",
      url: "https://forms.gle/aXjuoZ2e7TVVRJKT8"
    },
    // {
    //   name: "Development Team",
    //   url: "https://forms.gle/avsw3DkLJpEkR9Js8"
    // }
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleItems.length < applications.length) {
        setVisibleItems((prevVisible) => [...prevVisible, prevVisible.length]);
      } else {
        clearInterval(intervalId);
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [visibleItems]);

  const handleClick = () => setClick(!click)

  

  return (
    <div>
      <button onClick={handleClick} className="relative px-4 py-2 border-2 border-[#eabc4e] rounded-md hover:bg-[#eabc4e] text-[#196096] transition duration-200">Become a Member</button>
      {click && (
        <div className="absolute flex flex-col gap-2 py-2 ">
          {applications.map((application, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={
                visibleItems.includes(index)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -50 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 }}
              href={application.url}
              target="_blank"
              className="p-2 bg-white rounded-md hover:scale-110 hover:bg-gray-100">
              {application.name}
            </motion.a>
          ))}
        </div>
      )}

    </div>
  )
}

export default ApplyButton