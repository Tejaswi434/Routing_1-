import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'

import About from './components/About'

import Home from './components/Home'

import Contact from './components/Contact'

import NotFound from './components/NotFound'

const App = () => {
  ;<BrowserRouter>
    <>
      <Switch>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/notfound" component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
}

export default App
