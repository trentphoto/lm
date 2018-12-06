import React from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import { TweenMax, Elastic } from 'gsap'
import $ from 'jquery'

class PageAbout extends React.Component {
  componentDidMount() {
    TweenMax.fromTo(
      $('.containerAbout'), .7,
      { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1) },
      { transform: 'translateY(0px)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1) }
    )
  }
  render() {
    return (
      <PageWrapper>
        <section className="section section_light">
          <div className="container containerAbout">
            <div className="row">
              <div className="col-md-8">
                <h2 className="mb-5">About Building One Another</h2>
              </div>
              <div className="col-md-2">
                <img src="https://brightsaltmedialabs.com/buildingoneanotheradmin/wp-content/uploads/2018/11/Stan-Ott.jpg" alt="Stan Ott" className="img-fluid" />
                <p>Stan Ott</p>
              </div>
              <div className="col-md-2">
                <img src="https://brightsaltmedialabs.com/buildingoneanotheradmin/wp-content/uploads/2018/11/Lee-Zehmer.jpg" alt="Lee Zehmer" className="img-fluid" />
                <p>Lee Zehmer</p>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    )
  }
}
export default PageAbout
