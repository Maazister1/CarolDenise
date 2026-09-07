import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

// Home Page Component containing all landing page sections
function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <Booksvideos />
      <BookShowcase />
      <MeetAuthor />
      <AudioBookSection />
      <Community />
      <Event />
      <Resources />
      <Readers />
      <Newsletter />
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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

        {/* <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App