import React from 'react';

function Hero() {
  return (
    <section id="home" className="py-5">
      <div className="container text-center text-white">
        <h1 className="display-3 mb-3">OMAR FARUQUE</h1>
        <p className="h3 mt-4">FULL STACK WEB DEVELOPER</p>
        <a href="#about" id="actionBtn" className="btn btn-lg btn-primary mt-5" role="button">Tell me more</a>
      </div>
    </section>
  );
}

export default Hero;