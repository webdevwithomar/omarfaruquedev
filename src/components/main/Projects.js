import React, { Component } from 'react';
import Project from './projects/Project';

export default class Projects extends Component {
  render() {
    return (
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-primary display-4 mt-5 text-center mb-3">Projects</h2>
          <div className="heading-underline mx-auto mb-5"></div>

          <div className="row text-center mt-5">
            {this.props.projects.map(project => <Project key={project.id} id={project.id} img={project.img} heading={project.heading} desc={project.desc} url={project.url} github_url={project.github_url} />)}
          </div>

          <p className="lead text-center mt-5"><a href="https://github.com/webdevwithomar">See more at Github &rarr;</a>
          </p>
        </div>
      </section>
    )
  }
}