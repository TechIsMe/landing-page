import React from 'react';
import Hero from '../Components/Hero';
import Info from '../Components/Info';
import Banner from '../Components/Banner';

function Home() {
  return (
    <div>
        <Hero />
      <section className='section3'>
        <Info />
      </section>
      <section className='section2'>
      <Banner />
      </section>

    </div>
  )
}

export default Home;