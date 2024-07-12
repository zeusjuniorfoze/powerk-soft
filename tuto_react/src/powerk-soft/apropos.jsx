import React from 'react';
export function Apropos() {
    return (
        <div id="about" className="about-area area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h2>A-propos de Powerk-soft</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="well-left">
                            <div className="single-well">
                                <a href="#">
                                    <img src="../node_modules/assets/img/about/s_logo.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="well-middle">
                            <div className="single-well">
                                <a href="#">
                                    <h4 className="sec-head">Powerk-soft</h4>
                                </a>
                                <p>
                                    L'informatique a toujours été une passion pour nous, avant d'être notre métier, c'est pour cette raison que nous nous appliquons chaque jour à faire que nos services informatiques soient de qualité, et à fournir à nos clients les solutions informatiques les plus innovantes et les mieux adaptées à leurs besoins. Nous proposons à nos clients un service informatique de proximité qui rime avec compétence et sérieux en fonction de leurs besoins réels. Notre but est de vous offrir une gamme de prestations informatiques la plus large possible, pour pouvoir prendre en compte toutes vos demandes dans les meilleurs délais. Vous pouvez donc voir ci-dessous la liste non exhaustive de nos principales prestations informatiques :
                                </p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check"></i> Etude
                                    </li>
                                    <li>
                                        <i className="bi bi-check"></i> Conseil et Développement de solutions informatiques spécifiques.
                                    </li>
                                    <li>
                                        <i className="bi bi-check"></i> Fourniture de logiciels standard de gestion d’entreprise.
                                    </li>
                                    <li>
                                        <i className="bi bi-check"></i> Développement de logiciels spécifiques sur demande.
                                    </li>
                                    <li>
                                        <i className="bi bi-check"></i> Conception et hébergement des Sites Web.
                                    </li>
                                    <li>
                                        <i className="bi bi-check"></i> Conception et Réalisation des applications Web.
                                    </li>
                                    <li>
                                        <i className="bi bi-check"></i> etc...
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apropos;
