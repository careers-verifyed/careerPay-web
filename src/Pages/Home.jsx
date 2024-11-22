import React from 'react'
import { DownDisplayPage, HeroPage, LearnPage, DownPage } from '../Components'

const Home = () => {
  return (
    <div>
        <HeroPage />
        <DownPage />
        <LearnPage />
        <DownDisplayPage />
    </div>
  )
}

export default Home