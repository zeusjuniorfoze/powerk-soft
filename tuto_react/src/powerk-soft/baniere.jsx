import React from 'react';
function Baniere() {
  return (
    <div className='App'>
      <section id="hero">
        <div className="hero-container">
          <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
            <ol className="carousel-indicators">
              <li data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#heroCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#heroCarousel" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ backgroundImage: 'url(../node_modules/assets/img/hero-carousel/jc4.jpg)' }}>
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown"></h2>
                    <p className="animate__animated animate__fadeInUp">Bienvenue chez Powerk-soft</p>
                    <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Commencer</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ backgroundImage: 'url(node_modules/assets/img/hero-carousel/jc5.jpg)' }}>
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown"></h2>
                    <p className="animate__animated animate__fadeInUp">Bienvenue chez Powerk-soft</p>
                    <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Commencer</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ backgroundImage: 'url(node_modules/assets/img/hero-carousel/jc6.jpg)' }}>
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown"></h2>
                    <p className="animate__animated animate__fadeInUp">Bienvenue chez Powerk-soft </p>
                    <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Commencer</a>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Baniere;
