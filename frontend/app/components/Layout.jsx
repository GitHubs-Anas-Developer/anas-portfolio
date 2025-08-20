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
            <section className='bg-slate-900' id="about"><About /></section>
            <section className='bg-slate-900' id="stack"><Stack /></section>
            <section className='bg-slate-900' id="skills"><Skills /></section>
            <section className='bg-slate-900' id="projects"><Projects /></section>
            <section className='bg-slate-900' id="contacts"><Contact /></section>
        </>
    )
}

export default Layout
