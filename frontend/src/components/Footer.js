import React from 'react'

function Footer() {
    return (
        <>
            {/* <!-- news letter section --> */}
            <section class="news-letter-section pb-0 pt-0">
                <div class="boxcar-container">
                    <div class="row g-0 cus-radius-16">
                        {/* <!-- image-column --> */}
                        <div class="image-column col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-column">
                                <div class="image-box">
                                    <figure class="image"><img src="images/resource/news1-1.png" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                        {/* <!-- content-column --> */}
                        <div class="form-column col-lg-8 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="boxcar-title light">
                                    <h2>Subscribe To Our Mailing <br />List And Stay Up To Date</h2>
                                    <div class="text">We'll keep you updated with the best new jobs.</div>
                                </div>
                                <div class="subscribe-form wow fadeInUp" data-wow-delay="100ms">
                                    <form method="post" action="#">
                                        <div class="form-group">
                                            <input type="email" name="email" class="email" value="" placeholder="Your email" required="" />
                                                <button type="button" class="theme-btn btn-style-one hover-light"><span class="btn-title">subscribe</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End news-letter-section -->

            <!-- main footer --> */}
            <footer class="boxcar-footer footer-style-two v8">
                <div class="widgets-section">
                    <div class="boxcar-container">
                        <div class="row">
                            {/* <!-- Footer COlumn --> */}
                            <div class="footer-column-two col-lg-9 col-md-6 col-sm-12">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <div class="footer-widget links-widget wow fadeInUp">
                                            <h4 class="widget-title">Useful Links</h4>
                                            <div class="widget-content">
                                                <ul class="user-links style-two">
                                                    <li><a href="#">About Us</a></li>
                                                    <li><a href="#">Careers</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">FAQs</a></li>
                                                    <li><a href="#">Finance</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <div class="footer-widget links-widget wow fadeInUp" data-wow-delay="100ms">
                                            <h4 class="widget-title">Quick Links</h4>
                                            <div class="widget-content">
                                                <ul class="user-links style-two">
                                                    <li><a href="#">Get in Touch</a></li>
                                                    <li><a href="#">Help center</a></li>
                                                    <li><a href="#">Live chat</a></li>
                                                    <li><a href="#">How it works</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <div class="footer-widget links-widget wow fadeInUp" data-wow-delay="200ms">
                                            <h4 class="widget-title">Our Brands</h4>
                                            <div class="widget-content">
                                                <ul class="user-links style-two">
                                                    <li><a href="#">Aston Martin</a></li>
                                                    <li><a href="#">Audi</a></li>
                                                    <li><a href="#">Bentley</a></li>
                                                    <li><a href="#">BMW</a></li>
                                                    <li><a href="#">Bugatti</a></li>
                                                    <li><a href="#">Ferrari</a></li>
                                                    <li><a href="#">Jaguar</a></li>
                                                    <li><a href="#">Lamborghini</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <div class="footer-widget links-widget wow fadeInUp" data-wow-delay="300ms">
                                            <h4 class="widget-title">Vehicles Type</h4>
                                            <div class="widget-content">
                                                <ul class="user-links style-two">
                                                    <li><a href="#">Pickup</a></li>
                                                    <li><a href="#">Coup</a></li>
                                                    <li><a href="#">Family MPV</a></li>
                                                    <li><a href="#">Sedan</a></li>
                                                    <li><a href="#">SUVs</a></li>
                                                    <li><a href="#">Sport Coupe</a></li>
                                                    <li><a href="#">Convertible</a></li>
                                                    <li><a href="#">Wagon</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- footer column --> */}
                            <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div class="footer-widget social-widget wow fadeInUp" data-wow-delay="400ms">
                                    <h4 class="widget-title">Vehicles Type</h4>
                                    <div class="widget-content">
                                        <div class="text">
                                            Monday - Friday: 09:00AM - 09:00
                                            PMSaturday: 09:00AM - 07:00PM
                                            Sunday: Closed
                                        </div>
                                        <div class="social-icons">
                                            <h6 class="title">Connect With Us</h6>
                                            <ul>
                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--  Footer Bottom --> */}
                <div class="footer-bottom">
                    <div class="boxcar-container">
                        <div class="inner-container">
                            <div class="copyright-text wow fadeInUp">© <a href="/">2024 YatraCars.com.</a> All rights reserved.</div>

                            <ul class="footer-nav wow fadeInUp" data-wow-delay="100ms">
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Notice</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- End boxcar-footer --> */}
        </>
    )
}

export default Footer