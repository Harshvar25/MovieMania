import React from 'react'
import "../styles/homepage.css";
import Section01 from '../component/Section01'
import Section02 from '../component/Section02'
import Section03 from '../component/Section03'

function Home() {
  return (
    <div className='homepage'>
        <Section01 />
        <Section02 />
        <Section03 />
    </div>
  )
}

export default Home