import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class IndividualProj extends Component {
  render() {
    return (
      <section id="1" className=" py-5">
        <div className="container" >
          <h2 className="text-primary display-4 mt-5 text-center mb-3"></h2>
          <div className="heading-underline mx-auto mb-5"></div>
          <p><Link to="/#projects">&larr; Go Back</Link></p>

          <div className="row text-center mt-5">

          </div>
        </div>
      </section>
    )
  }
}