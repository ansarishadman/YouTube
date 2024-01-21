import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  return (
    <div className={isMenuOpen ? 'w-4/5 px-6' : 'px-4'}>
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer