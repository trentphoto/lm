import React from 'react';
import PageWrapper from '../components/layout/PageWrapper'
import Btn from '../components/Btn'

const PageListen = props => (
  <PageWrapper>
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Listen to the Building One Another podcast on all your favorite platforms.</h2>
            <a href="http://google.com">
              <Btn text="iTunes" />
            </a>
            <a href="http://google.com">
              <Btn text="Stitcher" />
            </a>
            <a href="http://google.com">
              <Btn text="SoundCloud" />
            </a>
            <a href="http://google.com">
              <Btn text="Spotify" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
)

export default PageListen
