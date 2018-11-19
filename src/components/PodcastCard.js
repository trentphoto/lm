import React from 'react';

const PodcastCard = (props) => (

  <div className="PodcastCard">
    {
      props.image && (
        <img className="PodcastCard__image" src={props.image} alt={props.title} />
      )
    }
    <div className="PodcastCard__content">
      <span className="PodcastCard__subtitle">Episode {props.id}</span>
      <h3 className="PodcastCard__title">{props.title}</h3>
      <span className="PodcastCard__subtitle">{props.excerpt}</span>
    </div>
  </div>

)

export default PodcastCard
