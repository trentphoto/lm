import React from 'react'
import Footer from './Footer'
import classnames from 'classnames'

const PageWrapper = props => {
  return (
    <div className={classnames('page', {
      'section_light': props.bg === 'light'
    })}>
      {
        props.children
      }
      <Footer />
    </div>
  );
}

export default PageWrapper
