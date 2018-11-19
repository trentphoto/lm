import React from 'react';

const InfoCard = (props) => (

  <div className="card info-card">
    <div className="card-body p-4">
      {props.children}
    </div>
  </div>
)

export default InfoCard
