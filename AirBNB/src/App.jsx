import React from 'react'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import data from './data.jsx'
import './index.css'

export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="cards-list">
              {cards}
          </section>
      </div>
  )
}
