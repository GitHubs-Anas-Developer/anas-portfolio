import React from 'react'
import Hero from '../pages/hero/page'
import About from '../pages/about/page'
import Contact from '../pages/contact/page'
import Stack from '../pages/Stack/page'
import Projects from '../pages/projects/page'
import Skills from '../pages/skills/Page'
import Header from './Header'

function Layout() {
    return (
        <>
         <Header />
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="stack"><Stack /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contacts"><Contact /></section>
        </>
    )
}

export default Layout
