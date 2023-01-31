import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { BookATable } from './components/BookATable'
import Credits from './components/Credits'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'

import { Page404 } from './pages/404'
import { Contact } from './pages/contact'
import { Index } from './pages/index'
import { Menu } from './pages/menu'
import Book from './pages/Book'

import './tailwind.css'
import Backtotop from './components/Backtotop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="font-poppins">
    <Router>
      <Backtotop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/book">
          <Book />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Footer />
      <Credits />
      <Redirect to='/'/>
    </Router>
  </div>
)
