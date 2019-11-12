import React from 'react';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container bg-white">
        <h2 className="text-primary display-4 mt-5 text-center mb-3">About Me</h2>
        <div className="heading-underline mx-auto"></div>

        <div className="row mt-5">
          <div className="col-sm-6 mb-4 mb-sm-0">
            <img src="img/46471904_267317667262220_8043602283658739712_n.jpg" alt="Me" className="img-fluid" />
          </div>
          <div className="col-sm-6">
            <p className="lead text-muted">I am a Full Stack JavaScript developer with skills in HTML, CSS, JavaScript and
              in frameworks like React and Express. I am passionate about developing interactive applications and
              providing an engaging user experience on my web apps.</p>

            <p className="lead text-muted">Continual education, keeping up with the latest technology trends and using
              cutting
              edge technologies in my projects are very important to me. Check out my latest projects at <a
                href="https://github.com/webdevwithomar" target="_blank" rel="noopener noreferrer">github</a>.</p>

            <p className="lead text-muted">I look forward to making a career in the Tech industry.</p>

            <blockquote className="blockquote text-right mt-5">
              <p>"I love programming, chatting, traveling and lifting heavy things."</p>
              <footer className="blockquote-footer">Me</footer>
            </blockquote>

            <div className="text-right mt-4">
              <a href="https://twitter.com/webdevwithomar" target="_blank" rel="noopener noreferrer"><img src="./img/icons/twitter.svg"
                alt="twitter" className="img-fluid social-icon" /></a>
              <a href="https://github.com/webdevwithomar" target="_blank" rel="noopener noreferrer" className="mr-2"><img src="./img/icons/github.svg"
                alt="github" className="img-fluid social-icon" /></a>
              <a href="https://linkedin.com/in/webdevwithomar" target="_blank" rel="noopener noreferrer"><img src="./img/icons/linkedin.svg"
                alt="linkedin" className="img-fluid social-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;