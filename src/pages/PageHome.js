import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PageWrapper from '../components/layout/PageWrapper'
import FeatureCard from '../components/FeatureCard'
import InfoCard from '../components/InfoCard'
import PodcastCard from '../components/PodcastCard'
import CtaSection from '../components/CtaSection'
import Btn from '../components/Btn'

const PageHome = props => {
  if (!props.episodes.length) return null;
  const latest = props.episodes[0]
  const latest3 = props.episodes.filter((i, ind) => ind < 3)

  return (
    <PageWrapper>

      <section className="section section_light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-3">
              <h2>About the Podcast</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iusto blanditiis quis dolores tempore voluptatum at fugit, sint aperiam id.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, provident.</p>
              <Link to="/episodes"><Btn color="primary" text="Get Devotionals" /></Link>
            </div>
            <div className="col-md-6">
              <Link to={`episodes/${latest.id}`}>
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

      <section className="section section_light">
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <InfoCard>
                <p className="text-center w-100 text-success"><i className="fas fa-anchor fa-2x"></i></p>
                <p>Building one another is about encouragement - encouraging your heart and encouraging you to encourage others!</p>
                <p>God said to Job: "Your words have put people on their feet!"</p>
              </InfoCard>
              <InfoCard>
                <p className="text-center w-100 text-success"><i className="fas fa-heart fa-2x"></i></p>
                <p className="font-weight-bold">Be encouraged</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="font-weight-bold">Be an encourager</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </InfoCard>
              <InfoCard>
                <p className="text-center w-100 text-success"><i className="fas fa-leaf fa-2x"></i></p>
                <p className="font-weight-bold">For individual or small group study</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, nesciunt!</p>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <section className="section section_blue">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center mb-5 text-white">Latest Episodes</h2>
              <div className="l_PodcastCard">
                {
                  latest3.map(i => (
                    <PodcastCard title={i.title} id={i.id} image={i.image} />
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


    </PageWrapper>
  );
}

const mapStateToProps = state => ({
  episodes: state.podcast.episodes
})

export default connect(mapStateToProps)(PageHome)
