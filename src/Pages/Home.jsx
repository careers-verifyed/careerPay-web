import React from 'react'
import { DownDisplayPage, HeroPage, LearnPage, DownPage, DetailsPage } from '../Components'

const Home = () => {
  return (
    <div>
        <HeroPage />
        <DownPage />
        <LearnPage />
        <DownDisplayPage />
        <DetailsPage />
    </div>
  )
}

export default Home