import React from 'react'

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-primary display-4 mt-5 text-center mb-3">My Skills</h2>
        <div className="heading-underline mx-auto"></div>

        <div className="mt-5">
          <h3 className="mt-5 mb-3">Front End Technologies</h3>
          <div className="row mb-5">
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/html.svg" alt="html"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>HTML</strong></p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/css.svg" alt="css"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>CSS</strong></p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/javascript.svg" alt="js"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>JavaScript</strong></p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/bootstrap.svg" alt="bootstrap"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>Bootstrap</strong></p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/sass.svg" alt="sass"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>SASS</strong></p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/react.svg" alt="react"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>React</strong></p>
            </div>
          </div>

          <h3 className="mt-5 mb-3">Back End Technologies</h3>
          <div className="row mb-5">
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/node.svg" alt="nodejs"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-1"><strong>Node.js</strong></p>
            </div>
          </div>

          <h3 className="mt-5 mb-3">Databases</h3>
          <div className="row mb-5">
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/mongo.svg" alt="mongo"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>MongoDB</strong></p>
            </div>
          </div>

          <h3 className="mt-5 mb-3">Tools</h3>
          <div className="row mb-5">
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/npm.svg" alt="npm"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-1"><strong>npm</strong></p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/git.svg" alt="git"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>Git</strong></p>
            </div>
          </div>

          <h3 className="mt-5 mb-3">Deployment</h3>
          <div className="row">
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/heroku.svg" alt="heroku"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-3"><strong>Heroku</strong></p>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-5"><img src="./img/icons/aws.svg" alt="aws"
              className="img-fluid p-3 skill-icon" />
              <p className="p-3 ml-1"><strong>AWS</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
