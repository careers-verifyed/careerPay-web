import React from 'react'
import { DownDisplayPage, HeroPage, LearnPage, DownPage, DetailsPage, HelpPage } from '../Components'

const Home = () => {
  return (
    <div>
        <HeroPage />
        <DownPage />
        <LearnPage />
        <DownDisplayPage />
        <DetailsPage />
        <HelpPage />
    </div>
  )
}

export default Home