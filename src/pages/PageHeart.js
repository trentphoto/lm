import React from 'react';
import PageWrapper from '../components/layout/PageWrapper'
import CtaSection from '../components/CtaSection'
import { TweenMax, Elastic } from 'gsap'
import $ from 'jquery'

class PageHeart extends React.Component {
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
