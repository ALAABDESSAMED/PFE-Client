import React from 'react'
import Header from '../components/Home/Header/Header'
import Services from '../components/Home/Services/Services'
import NewsLetterModel from '../components/NewsLetterModel/NewsLetterModel'
import BestOffre from '../components/BestOffre/BestOffre'
import BestProduct from '../components/BestProduct/BestProduct'

const Home = () => {
  return (
    <div >
      
      <Header/>
      <Services/>
      <BestOffre />
      <BestProduct/>
    </div>
  )
}

export default Home