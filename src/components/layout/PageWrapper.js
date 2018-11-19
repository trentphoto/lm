import React from 'react'
import BoaHeader from './BoaHeader'
import Subnav from './Subnav'
import Footer from './Footer'

const PageWrapper = props => {
  return (
    <React.Fragment>
      <BoaHeader />
      <Subnav />
      {
        props.children
      }
      <Footer />
    </React.Fragment>
  );
}

export default PageWrapper
