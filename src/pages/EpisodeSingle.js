import React from 'react'
import { connect } from 'react-redux'
import InfoCard from '../components/InfoCard'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'
import { TweenMax, Elastic } from 'gsap'
import $ from 'jquery'

class EpisodeSingle extends React.Component {

  componentDidMount() {
    // TweenMax.fromTo(
    //   $('.contentLeft'), 1,
    //   { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1)},
    //   { transform: 'translateY(0px)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1)},
    // )
    TweenMax.fromTo(
      $('.sidebarRight'), 1,
      { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1)},
      { transform: 'translateY(0px)', opacity: 1, delay: .5, ease: Elastic.easeOut.config(0.25, 1)},
    )
  }

  render() {

    if (!this.props.episodes.length) return null;

    const item = this.props.episodes.filter(i => i.id === this.props.match.params.slug)[0]

    return (
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 contentLeft">
              <h1>{item.title}</h1>
              {
                item.image && <img className="img-fluid" alt={item.title} src={item.image} />
              }
              {
                item.url && <audio className="my-5" controls src={item.url}></audio>
              }
              <div className="button-group">
                <a href="https://soundcloud.com" className="btn btn-light mr-3 mb-3 btn-sm">Listen on iTunes</a>
                <a href="https://soundcloud.com" className="btn btn-light mr-3 mb-3 btn-sm">Listen on Stitcher</a>
                <a href="https://soundcloud.com" className="btn btn-light mr-3 mb-3 btn-sm">Listen on SoundCloud</a>
              </div>
              <hr />
              <h2 className="text-primary mt-4">Letter</h2>
              <div dangerouslySetInnerHTML={{__html: item.letter}} />
              <hr />
              <h2 className="text-primary mt-4">Notes</h2>
              <div dangerouslySetInnerHTML={{__html: item.notes}} />
            </div>
            <div className="col-md-4 sidebarRight">
              <InfoCard>
                <img src="https://mindvitaminpodcast.files.wordpress.com/2017/05/stitcher-logo.png" className="img-fluid" alt="Stitcher" />
              </InfoCard>
              <InfoCard>
                <img src="https://archive.org/download/available-on-itunes-logo/available-on-itunes-logo.jpg" className="img-fluid" alt="iTunes" />
              </InfoCard>
              <h3 className="text-primary">About the Podcast</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sint minima corporis facere ad aliquam iste maiores inventore unde quisquam.</p>
              <Link to="/about"><Btn color="primary" text="Read more" /></Link>
            </div>
          </div>
        </div>
      </section>
    );

  }

}

const mapStateToprops = state => ({
  episodes: state.podcast.episodes
})

export default connect(mapStateToprops)(EpisodeSingle)
