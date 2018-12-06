import React from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PageWrapper from '../components/layout/PageWrapper'
import EpisodeSingle from './EpisodeSingle'
import PodcastCard from '../components/PodcastCard'
import { TweenMax, Elastic } from 'gsap'
import $ from 'jquery'

class PageEpisodes extends React.Component {

  componentDidMount() {
    console.log(25);
    TweenMax.fromTo(
      $('.containerEpisodes'), .7,
      { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1)},
      { transform: 'translateY(0px)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1)},
    )
  }

  render() {
    const Index = () => (
      <section className="section section_light">
        <div className="container containerEpisodes">
          <div className="row">
            <div className="col">
              <h2 className="mb-5 text-center">All Episodes</h2>
              <div className="l_PodcastCard">
                {
                  this.props.episodes.map(i => (
                    <Link className="no-hover" key={i.id} to={`${this.props.match.url}/${i.id}`}>
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
            </div>
          </div>
        </div>
      </section>

    )

    return (
      <PageWrapper>
        <Route exact path={this.props.match.url} component={Index} />
        <Route exact path={`${this.props.match.url}/:slug`} component={EpisodeSingle} />
      </PageWrapper>
    );

  }

}

const mapStateToProps = state => ({
  episodes: state.podcast.episodes
})

export default connect(mapStateToProps)(PageEpisodes)
