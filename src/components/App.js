import React from 'react'
import axios from 'axios'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyProfile from './MyProfile'



export default function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={MyProfile}></Route>
      </div>
    </Router>
  )
}
