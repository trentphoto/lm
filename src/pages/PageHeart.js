import React from 'react';
import PageWrapper from '../components/layout/PageWrapper'
import CtaSection from '../components/CtaSection'
import { TweenMax, Elastic } from 'gsap'
import $ from 'jquery'

class PageHeart extends React.Component {
  componentDidMount() {
    TweenMax.fromTo(
      $('.animateIn'), .7,
      { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1)},
      { transform: 'translateY(0px)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1)},
    )
  }

  render() {
    return (
      <PageWrapper>
        <div className="animateIn">
          <CtaSection />
        </div>
      </PageWrapper>
    );
  }
}

export default PageHeart
