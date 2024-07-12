import React from 'react';
function Contact() {
    return (
        <div id="contact" className="contact-area">
            <div className="contact-inner area-padding">
                <div className="contact-overly"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12" id="contact-us">
                            <div className="section-headline text-center">
                                <h2>Contactez-nous</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="bi bi-phone"></i>
                                    <p>
                                        Call: +1 5589 55488 55<br />
                                        <span>Monday-Friday (8am-6pm)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="bi bi-envelope"></i>
                                    <p>
                                        Email: contact@simrounivers.com<br />
                                        <span>Web: www.simrounivers.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <i className="bi bi-geo-alt"></i>
                                    <p>
                                        Location: Emana Yaounde Cameroun<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"
                                width="100%"
                                height="380"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                                title="Location Map"
                            ></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="form contact-form">
                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Votre nom" required />
                                        </div>
                                        <div class="form-group col-md-6 mt-3 mt-md-0">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Votre Email" required />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Objet" required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div class="my-3">
                                    </div>
                                    <div class="text-center"><button type="submit" id="submitbtn">Envoyer</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
