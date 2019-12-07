import React from 'react';

export default function Project(props) {
  return (
    <div className="col-md-6 col-lg-4 mt-5">
      <div className="card">
        <a className="card-img-link" href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.img} className="card-media" alt={props.heading} />
        </a>
        <div className="card-details">
          <h2 className="card-head">{props.heading}</h2>
          <p>{props.desc}</p>
          <a href={props.url} target="_blank" rel="noopener noreferrer" className="card-action-button"><img className="card-icon1" src="./img/icons/globe.svg" alt="globe_icon" /></a>
          <a href={props.github_url} target="_blank" rel="noopener noreferrer" className="card-action-button"><img className="card-icon2" src="./img/icons/github.svg" alt="github_icon" /></a>
        </div>
      </div>
    </div>
  )
}
