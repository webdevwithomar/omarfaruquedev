import React from 'react';
import uuidv4 from 'uuid/v4';
import IndividualSkill from './IndividualSkill';

export default function Skill(props) {
  return (
    <React.Fragment>
      <h3 className="mt-5 mb-3">{props.heading}</h3>

      <div className="row mb-5 d-flex justify-content-center">
        {
          props.items.filter(item => item.type == props.heading).map(item => <IndividualSkill key={uuidv4()} img={item.img} name={item.name} />)
        }
      </div>
    </React.Fragment>
  )
}
