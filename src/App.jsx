

import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsCounter from './Components/StatsCounter'
import BookShowcase from './Components/BookShowcase'
import MeetAuthor from './Components/MeetAuthor'
import Community from './Components/Community'
import Readers from './Components/Readers'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'
import Thefamily from './Books/Thefamily'
import SuperHeros from './Books/SuperHeros'

// Import Pages from Pages folder
import Contact from './Pages/Contact'
import Author from './Pages/Author'
import Reviews from './Pages/Reviews'
import AudioBookSection from './Components/AudioBookSection'
import BookShowcase2 from './Components/Bookshowcase2'
import CommunityPage from './Pages/CommunityPage'
import Booksvideos from './Components/Booksvideos'
import Resources from './Components/Resources'
import Audiobooks from './Pages/Audiobook'
import Event from './Components/Event'
import Distribution from './Pages/Distribution'

// Import the Floating Buy Button Component
import FloatingBuyButton from './Components/FloatingBuyButton'
import Reveal from './Components/Reveal'
import ScrollProgress from './Components/ScrollProgress'
import useScrollReveal from './Components/useScrollReveal'

// Scroll to the top of the page on every route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function Home() {
  return (
    <div className="overflow-x-clip">
      <Reveal from="blur"><Hero /></Reveal>
      <Reveal from="zoom"><StatsCounter /></Reveal>
      <Reveal from="left"><Booksvideos /></Reveal>
      <Reveal from="right"><BookShowcase /></Reveal>
      <Reveal from="up"><MeetAuthor /></Reveal>
      <Reveal from="left"><AudioBookSection /></Reveal>
      <Reveal from="right"><Community /></Reveal>
      <Reveal from="zoom"><Event /></Reveal>
      <Reveal from="left"><Resources /></Reveal>
      <Reveal from="right"><Readers /></Reveal>
      <Reveal from="up"><Newsletter /></Reveal>
    </div>
  )
}

// Re-mounts on every route change so each page fades in, and its sections animate on scroll
function AnimatedRoutes() {
  const location = useLocation()
  const pageRef = useRef(null)
  useScrollReveal(pageRef, location.pathname)

  return (
    <div key={location.pathname} ref={pageRef} className="animate-page-in overflow-x-clip">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/books/the-family" element={<Thefamily />} />
        <Route path="/books/superheroes" element={<SuperHeros />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/pages/author" element={<Author />} />
        <Route path="/pages/communitypages" element={<CommunityPage />} />
        <Route path="/pages/reviews" element={<Reviews />} />
        <Route path="/bookshowcase" element={<BookShowcase />} />
        <Route path="/bookshowcase2" element={<BookShowcase2 />} />
        <Route path="/pages/audiobooks" element={<Audiobooks />} />
        <Route path="/pages/distribution" element={<Distribution />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      {/* Floating Buy Now Button Added Here */}
      <FloatingBuyButton />

      <Footer />
    </Router>
  )
}

export default App