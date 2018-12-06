import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorBoundary from './components/ErrorBoundary'
import withLoading from './components/withLoading'
import Home from './pages/home'
import Layout from './Layout'

// lazy load about page. This is a dynamic import and results in a own js bundle
const About = React.lazy(() => import('./pages/about'))

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ErrorBoundary>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={withLoading(About)} />
          </Switch>
        </Layout>
      </Router>
    </ErrorBoundary>
  </React.Fragment>
)

export default App
