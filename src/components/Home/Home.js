import React from 'react'
import image from '../Images/background.jpg'
import './Home.css'

export default function Home() {
  return (
    <section className='home'>
        <main>
            <img src={image} alt='retro computers' />
        </main>
    </section>
  )
}
