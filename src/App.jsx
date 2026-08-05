import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsCounter from './Components/StatsCounter'
import BookShowcase from './Components/BookShowcase'
import MeetAuthor from './Components/MeetAuthor'
import BookBanner from './Components/BookBanner'
import Blogs from './Components/Blogs'
import Podcast from './Components/Podcast'
import Articles from './Components/Articles'
import Readers from './Components/Readers'
import Newsletter from './Components/Newsletter'
import Footer from './Components/Footer'

// Import Books pages from Books folder
import Thefamily from './Books/Thefamily'
import SuperHeros from './Books/SuperHeros'
import Contact from './Pages/Contact'
import Author from './Pages/Author'
import AuthorBlog from './Pages/AuthorBlogs'
import Reviews from './Pages/Reviews'

// Home Page Component containing all landing page sections
function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <BookShowcase />
      <MeetAuthor />
      <BookBanner />
      <Blogs />
      <Podcast />
      <Articles />
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
        <Route path="/pages/authorblogs" element={<AuthorBlog />} />
         <Route path="/pages/reviews" element={<Reviews />} />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App