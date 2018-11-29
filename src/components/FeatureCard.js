import React from 'react';

const FeatureCard = props => (

  <div className="FeatureCard">
    <div className="row no-gutters">
      {
        props.image && (
          <div className="col FeatureCard__image-wrap">
            <img className="FeatureCard__image" src={props.image} alt={props.title} />
          </div>
        )
      }
      <div className="col">
        <div className="card-body">
          <p className="FeatureCard__subtitle">{props.subtitle}</p>
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.info}</p>
          <div className="FeatureCard__btn btn btn-primary btn-block">{props.btnText}</div>
        </div>
      </div>
    </div>
  </div>

)

export default FeatureCard
