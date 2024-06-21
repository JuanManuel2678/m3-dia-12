import React from 'react'

export const ItemList = ({children}) => {
  return (
    <ul className='grid gap-2 grid-cols-3 grid-rows-3  m-2 '>
      {children}
    </ul>
  )
}
