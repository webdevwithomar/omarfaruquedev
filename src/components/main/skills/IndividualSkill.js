import React from 'react'

export default function IndividualSkill(props) {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src={props.img} alt="html"
      className="img-fluid p-3 skill-icon" />
      <p className="p-3 ml-3"><strong>{props.name}</strong></p>
    </div>
  )
}
