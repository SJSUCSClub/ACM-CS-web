import React from 'react'

const LinkToButton = ({url, text}) => {
  return (
    <div>
      <a href={url}
        target="_blank" 
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-lg`}>
        {text}
      </a>
    </div>
  )
}

export default LinkToButton