import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Companies from './views/companies'
import TrackCompany from './views/track-company'

function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/track-company/'>Track company</Link>
            </li>
            <li>
              <Link to='/companies/'>Companies</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={Companies} />
        <Route path='/companies' exact component={Companies} />
        <Route path='/track-company' component={TrackCompany} />
      </div>
    </Router>
  )
}

export default App
