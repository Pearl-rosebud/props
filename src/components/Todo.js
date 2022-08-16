import React from 'react'

function todo({title,datetime}) {
  return (
 <div className='Todo'>
        <h3>{title}</h3>
        <p>{datetime}</p>
    </div>
  )
}

export default todo