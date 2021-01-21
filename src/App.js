import React from 'react'
import ReactDOM from 'react-dom'
import HeadSection from './head/HeadSection.js'
import AboutSection from './about/AboutSection.js' 
import ContactSection from './contact/ContactSection.js'
import ProjectsSection from './projects/ProjectsSection.js'

function App(props) {
  switch(props.section) {
    case 'head':
      return <HeadSection/>
    case 'about':
      return <AboutSection/>
    case 'contact':
      return <ContactSection/>
    case 'projects':
      return <ProjectsSection/>
  }
}

let root = document.querySelector('#root')
ReactDOM.render(<App section='head'/>,root)
let links = document.querySelectorAll('nav>a')

function transition(page) {
  ReactDOM.unmountComponentAtNode(root)
  ReactDOM.render(<App section={page}/>,root)
  links = document.querySelectorAll('nav>a')
  links.forEach(link => {
    link.addEventListener('click',() => transition(link.dataset.section))
  }) 
}

links.forEach(link => {
  link.addEventListener('click',() => transition(link.dataset.section))
})

