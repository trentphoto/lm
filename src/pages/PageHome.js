import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TweenMax, Elastic } from 'gsap'
import $ from 'jquery'
import PageWrapper from '../components/layout/PageWrapper'
import FeatureCard from '../components/FeatureCard'
import InfoCard from '../components/InfoCard'
import PodcastCard from '../components/PodcastCard'
import CtaSection from '../components/CtaSection'
import Btn from '../components/Btn'

class PageHome extends React.Component {
  componentDidMount() {
    // TweenMax.fromTo(
    //   $('.home_wrapper'), .7,
    //   { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1)},
    //   { transform: 'translateY(0px)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1)}
    // )
  }

  render() {
    if (!this.props.episodes.length) return null;
    const latest = this.props.episodes[0]
    const latest3 = this.props.episodes.filter((i, ind) => ind < 3)

    return (
      <PageWrapper bg="light">

          <div className="">

            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 py-3">
                    <h2>About the Podcast</h2>
                    <p className="lead">Our heart is to encourage your heart and to encourage you to encourage others.</p>
                    <p>We touch on many topics of life, love and leadership to encourage your trust in Jesus as you take whatever adventure our Lord has given you and as you encourage others on their adventures of faith life.</p>
                    <Link to="/episodes"><Btn color="primary" text="Get Devotionals" /></Link>
                  </div>
                  <div className="col-md-6">
                    <Link className="no-hover" to={`episodes/${latest.id}`}>
                      <FeatureCard
                        title={latest.title}
                        subtitle="Latest Episode"
                        info={latest.excerpt}
                        btnText="Listen now"
                        image={latest.image}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="card-deck">
                    <InfoCard>
                      <p className="text-center w-100 text-success"><i className="fas fa-anchor fa-2x"></i></p>
                      <p><i>Encourage one another and build one another up, just as you are doing.</i></p>
                      <p>I Thessalonians 5:11</p>
                    </InfoCard>
                    <InfoCard>
                      <p className="text-center w-100 text-success"><i className="fas fa-heart fa-2x"></i></p>
                      <p className="font-weight-bold">Be encouraged</p>
                      <p>Whether you are in a good place or a rough one, a place of challenge, trial or adventure, our Lord wants to encourage your heart!</p>
                      <p className="font-weight-bold">Be an encourager</p>
                      <p>God said to Job, “Your words have put people on their feet.” Our Lord wishes to encourage many others through you!</p>
                    </InfoCard>
                    <InfoCard>
                      <p className="text-center w-100 text-success"><i className="fas fa-leaf fa-2x"></i></p>
                      <p className="font-weight-bold">For individual and small group study</p>
                      <p>Building One Another is both a podcast and an e-devotional. Both of them are designed for your personal use and for use in small group and leadership teams.</p>
                      <p>You may access the podcasts here or on your favorite podcast platform. You may have the e-devotionals sent to your inbox or read them here.</p>
                    </InfoCard>
                  </div>
                </div>
              </div>
            </section>

            <CtaSection bg="white" />

            <section className="section section_blue">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h2 className="text-center mb-5 text-white">Latest Episodes</h2>
                    <div className="l_PodcastCard">
                      {
                        latest3.map(i => (
                          <Link className="no-hover" to={`/episodes/${i.id}`} key={i.id}>
                            <PodcastCard
                              title={i.title}
                              id={i.id}
                              excerpt={i.excerpt}
                              image={i.image}
                              />
                          </Link>
                        ))
                      }
                    </div>
                    <div className="text-center">
                      <Link to="/episodes"><Btn text="View More" classes="btn-light mt-5" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section_white">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-center mx-auto">
                    <h2>Support Building One Another</h2>
                    <p className="lead">Your support helps us continue making new episodes available for free.</p>
                    <button className="btn btn-primary btn-primary-gradient">Support Us on Patreon</button>
                  </div>
                </div>
              </div>
            </section>

          </div>

      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  episodes: state.podcast.episodes
})

export default connect(mapStateToProps)(PageHome)
