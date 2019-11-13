import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {
  return (
    <div className="col-md-6 col-lg-4 mt-5">
      <div className="card">
        <Link className="card-img-link" to={'/projects/' + props.id}>
          <img src={props.img} className="card-media" alt={props.heading} />
        </Link>
        <div className="card-details">
          <h2 className="card-head">{props.heading}</h2>
          <p>{props.desc}</p>
          <p><Link to={'/projects/' + props.id}>Learn More &rarr;</Link></p>
          <a href={props.url} target="_blank" rel="noopener noreferrer" className="card-action-button"><img className="card-icon1" src="./img/icons/globe.svg" alt="globe_icon" /></a>
          <a href={props.github_url} target="_blank" rel="noopener noreferrer" className="card-action-button"><img className="card-icon2" src="./img/icons/github.svg" alt="github_icon" /></a>
        </div>
      </div>
    </div>
  )
}
