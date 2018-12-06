import React from 'react';
import './sass/App.scss';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FetchData from './components/FetchData'

import PageHome from './pages/PageHome'
import PageAbout from './pages/PageAbout'
import PageEpisodes from './pages/PageEpisodes'
import PageHeart from './pages/PageHeart'
import PageListen from './pages/PageListen'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
library.add( faPlay )

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <FetchData />
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route path="/about" render={({ match }) => <PageAbout />} />
              <Route path="/episodes" component={PageEpisodes} />
              <Route path="/heart" component={PageHeart} />
              <Route path="/listen" component={PageListen} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
