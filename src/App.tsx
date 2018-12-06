import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import withLoading from './components/withLoading'
import Home from './pages/home'

// lazy load about page. This is a dynamic import and results in a own js bundle
const About = React.lazy(() => import('./pages/about'))

const App = () => (
  <ErrorBoundary>
    <Router>
      <div>
        <h1>Starter Kit</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About (lazy loaded)</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about/" component={withLoading(About)} />
        </Switch>
      </div>
    </Router>
  </ErrorBoundary>
)

export default App
