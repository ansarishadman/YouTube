import React from 'react'
import Button from './Button'

const headerList = [ 'All', 'Gaming', 'Cooking', 'Songs', 'Live', 'MKBHD', 'Cricket', 'Soccer', 'Basketball' ]

const ButtonsList = () => {
  return (
    <div className='flex'>
      {headerList.map(list => <Button key={list} name={list} />)}
    </div>
  )
}

export default ButtonsList