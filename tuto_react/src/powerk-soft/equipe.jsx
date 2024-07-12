import React from 'react';

function Equipe() {
    return (
        <div>
            <div id="team" className="our-team-area area-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="section-headline text-center">
                                <h2>Notre équipe spéciale</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="single-team-member">
                                <div className="team-img">
                                    <a href="#">
                                        <img src="../node_modules/assets/img/team/san.jpg" alt="" />
                                    </a>
                                    <div className="team-social-icon text-center">
                                        <ul>
                                            <li>
                                                <a href="http://www.sandis.com/">
                                                    <i className="bi bi-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h4>M. Sandra</h4>
                                    <p>Responsable du réseau et connexion mobile</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="single-team-member">
                                <div className="team-img">
                                    <a href="#">
                                        <img src="../node_modules/assets/img/team/me.png" alt="" />
                                    </a>
                                    <div className="team-social-icon text-center">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h4>M. Lucrece</h4>
                                    <p>Responsable du front-end</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="single-team-member">
                                <div className="team-img">
                                    <a href="#">
                                        <img src="../node_modules/assets/img/team/juniors.png" alt="" width="600" height="300" />
                                    </a>
                                    <div className="team-social-icon text-center">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h4>F. Junior</h4>
                                    <p>Responsable du back-end</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="single-team-member">
                                <div className="team-img">
                                    <a href="#">
                                        <img src="../node_modules/assets/img/team/romi.png" alt="" />
                                    </a>
                                    <div className="team-social-icon text-center">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="bi bi-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h4>S. Romeo</h4>
                                    <p>Chef d'équipe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews-area">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <img src="../node_modules/assets/img/about/a.jpg" alt="" width="700" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 work-right-text d-flex align-items-center">
                        <div className="px-5 py-5 py-lg-0">
                            <h2>Travailler avec nous</h2>
                            <h5>Fourniture de logiciels standard de gestion d’entreprise, Conception et Réalisation des applications Web, Conception et hébergement des Sites Web</h5>
                            <a href="#contact" className="ready-btn scrollto">Contactez-nous</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipe;
