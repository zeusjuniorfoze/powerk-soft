import React from 'react';
function Footer() {
    return (
        <footer>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-content">
                                <div className="footer-head">
                                    <div className="footer-logo">
                                        <h2><span>P</span>owerk-<span>S</span>oft</h2>
                                    </div>
                                    <div className="footer-icons">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="bi bi-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="bi bi-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-content">
                                <div className="footer-head">
                                    <h4>Information</h4>
                                    <div className="footer-contacts">
                                        <p><span>Tel:</span> +123 456 789</p>
                                        <p><span>Email:</span> contact@simrounivers.com</p>
                                        <p><span>Working Hours:</span> 8am-6pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-content">
                                <div className="footer-head">
                                    <h4>Instagram</h4>
                                    <div className="flicker-img">
                                        <a href="#"><img src="assets/img/portfolio/is.jpg" alt="" width="100" height="100" /></a>
                                        <a href="#"><img src="assets/img/portfolio/w.jpg" alt="" width="100" height="100" /></a>
                                        <a href="#"><img src="assets/img/portfolio/tw.jpg" alt="" width="100" height="100" /></a>
                                        <a href="#"><img src="assets/img/portfolio/45.jpg" alt="" /></a>
                                        <a href="#"><img src="assets/img/portfolio/55.jpg" alt="" /></a>
                                        <a href="#"><img src="assets/img/portfolio/67.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-area-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="copyright text-center">
                                <p>
                                    &copy; Copyright <strong>Powerk-soft</strong>. All Rights Reserved
                                </p>
                            </div>
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
