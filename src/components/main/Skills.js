import React, { Component } from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import Skill from './skills/Skill';

export default class Skills extends Component {
  state = {
    skills: [],
    headings: []
  }

  componentDidMount() {
    axios.get(`./skills.json`)
      .then(res => {
        const skills = res.data;
        this.setState({ skills });
      }).then(res => {
        // get headings
        const getAllHeadings = []
        let headings = [];
        this.state.skills.forEach(skill => {
          getAllHeadings.push(skill.type)
        })

        headings = [...new Set(getAllHeadings)];
        this.setState({ headings })
      })
  }

  render() {
    return (
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-primary display-4 mt-5 text-center mb-3">My Skills</h2>
          <div className="heading-underline mx-auto"></div>

          <div className="mt-5 text-center">
            {this.state.headings.map(skill => <Skill key={uuidv4()} heading={skill} items={this.state.skills} />)}
          </div>
        </div>
      </section>
    )
  }
}
