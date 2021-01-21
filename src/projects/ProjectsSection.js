import React from 'react'
import Card from './Card.js'
import BodyNav from '../BodyNav.js'

let cards = [
  {
    id:1,
    imgLink:"images/cooljsthings.png",
    mainLink:"https://cooljavascriptthings.firebaseapp.com",
    title:'CoolJSThings Website',
    description:'A collection of JavaScript games and other mini projects. Many of these projects were tutorial driven. The source code for the projects I made from scratch can be found on my GitHub.'
  },
  {
    id:2,
    imgLink:"images/texttospeech.png",
    mainLink:"https://texttospeech.ajaybhatta49.repl.co",
    title:'TextToSpeech App',
    description:'A text-to-speech website I built from scratch using HTML, CSS, JavaScript, and PhP. Source code can be found on my GitHub.'
  },
  {
    id:3,
    imgLink:"images/kanye.jpg",
    mainLink:"https://kanyequotes.ajaybhatta49.repl.co",
    title:'Kanye Quote Generator',
    description:'A random generator for quotes from Kanye West that integrates the Kanye.rest API. User interface built using HTML, CSS, and JavaScript. Source code can be found on my GitHub.'
  },
  {
    id: 4,
    imgLink:"images/weather.png",
    mainLink:"https://weatherapp.ajaybhatta49.repl.co",
    title:"Weather App",
    description: "A weather app that uses the openweathermap API to generate a weather report, which can be based on a specified city or the user's current location. Source code can be found on my GitHub."
  }
]

export default function ProjectsSection() {
  let cardComponents = cards.map(card => <Card key={card.id} data={card} />)
  return (
    <>
    <BodyNav section='projects'/>
    <section id='projects'>
      <h1>My Projects</h1>
      {cardComponents}
      <p>This is just a few of my latest and most relevant projects. A full list of all my projects can be found <a href="https://projects.ajaybhatta49.repl.co" target="_blank">here</a>.</p>
    </section>
    </>
  )
}
