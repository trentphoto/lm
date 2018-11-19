import React from 'react'

import Modal from './modalwTrigger'

const CtaSection = props => (
  <section className={`section section_${props.bg}`}>
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h2>Grow a heart to impart</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate animi, quibusdam totam mollitia vero autem, nam unde repellendus ipsum hic!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, saepe.</p>
          <Modal />
        </div>
        <div className="col-md-5 offset-md-2">
          <div className="heart-cover-styled">
            <img alt="" src="http://brightsaltmedia.com/wp-content/uploads/2018/08/cover.jpg" className="heart-cover-styled__img img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CtaSection
