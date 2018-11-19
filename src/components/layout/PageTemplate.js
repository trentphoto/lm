import React from 'react'
import PageWrapper from './PageWrapper'

const PageTemplate = props => (
  <PageWrapper>
    <section className="section section_white">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {props.children}
          </div>
          <div className="col-md-4">
            <p>Sidebar here.</p>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
)

export default PageTemplate
