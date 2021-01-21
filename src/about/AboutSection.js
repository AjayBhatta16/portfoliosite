import React from 'react'
import BodyNav from '../BodyNav.js'

export default function AboutSection() {
  return (
    <>
    <BodyNav section='about'/>
    <section id="about">
      <h1>About Me</h1>
      <p>My name is Ajay Bhattacharyya. I am a freelance web developer and aspiring software engineer from Rochester, New York. I am currently a college freshman double majoring in Computer Science and Mathematics.</p>
      <a href="resume.pdf" target="_blank"><button>My Resume</button></a>
    </section>
    </>
  )
}
