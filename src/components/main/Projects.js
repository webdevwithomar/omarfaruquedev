import React, { Component } from 'react';
import Project from './projects/Project';
import axios from 'axios';

export default class Projects extends Component {
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
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-primary display-4 mt-5 text-center mb-3">Projects</h2>
          <div className="heading-underline mx-auto mb-5"></div>

          <div className="row text-center mt-5">
            {this.state.projects.map(project => <Project key={project.id} id={project.id} img={project.img} heading={project.heading} desc={project.desc} url={project.url} github_url={project.github_url} />)}
          </div>

          <p className="lead text-center mt-5"><a href="https://github.com/webdevwithomar">See more at Github &rarr;</a>
          </p>
        </div>
      </section>
    )
  }
}