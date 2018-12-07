import React from 'react';
import './sass/App.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { introPageAnimation, outroPageAnimation } from './utils/animations'

import FetchData from './components/FetchData'
import BoaHeader from './components/layout/BoaHeader'
import Subnav from './components/layout/Subnav'

import PageHome from './pages/PageHome'
import PageAbout from './pages/PageAbout'
import PageEpisodes from './pages/PageEpisodes'
import PageHeart from './pages/PageHeart'
import PageListen from './pages/PageListen'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faBookOpen, faGift } from '@fortawesome/free-solid-svg-icons'
library.add( faPlay, faBookOpen, faGift )

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FetchData />
        <BoaHeader />
        <Subnav />

        <div className="transition-wrapper">

        <TransitionGroup>

          <CSSTransition
            classNames="fade"
            key={this.props.location.key}
            timeout={500}
            appear={true}
            onEnter={node => introPageAnimation(node)}
            onExit={node => outroPageAnimation(node)}
          >

            <Switch location={this.props.location}>
              <Route exact path="/" render={() => <PageHome />} />
              <Route path="/about" render={() => <PageAbout />} />
              <Route path="/episodes" component={PageEpisodes} />
              <Route path="/heart" component={PageHeart} />
              <Route path="/listen" component={PageListen} />
            </Switch>

          </CSSTransition>

        </TransitionGroup>

        </div>

      </div>
    );
  }
}

export default App;
