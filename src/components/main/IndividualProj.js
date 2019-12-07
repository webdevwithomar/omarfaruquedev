import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class IndividualProj extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(`./data.json`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
  }

  render() {
    return (
      <section id="1" className=" py-5">
        <div className="container" >
          <p><Link to="/#projects">&larr; Go Back</Link></p>
          <h2 className="text-primary display-4 mt-5 text-center mb-3">heading</h2>
          <div className="heading-underline mx-auto mb-5"></div>
          <p>desc</p>


          <div className="row text-center mt-5">

          </div>
        </div>
      </section>
    )
  }
}