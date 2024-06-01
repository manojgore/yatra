import React from 'react'

function Dashboard() {
    return (
        <>
            <div class="body">

                <div class="boxcar-wrapper v2"> 

                    {/* <!-- Main Header--> */}
                    <header class="boxcar-header header-style-ten">
                        <div class="header-inner">
                            <div class="inner-container"> 
                                {/* <!-- Main box --> */}
                                <div class="c-box"> 
                                    <div class="logo-inner">   
                                        <div class="logo"><a href="index.html"><img src="images/logo.svg" alt="" title="Boxcar" /></a></div>
                                        <div class="btn-box">  
                                            <div class="layout-search style1">
                                                <div class="search-box">
                                                    <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.29301 1.2876C3.9872 1.2876 1.29431 3.98048 1.29431 7.28631C1.29431 10.5921 3.9872 13.2902 7.29301 13.2902C8.70502 13.2902 10.0036 12.7954 11.03 11.9738L13.5287 14.4712C13.6548 14.5921 13.8232 14.6588 13.9979 14.657C14.1725 14.6552 14.3395 14.5851 14.4631 14.4617C14.5867 14.3382 14.6571 14.1713 14.6591 13.9967C14.6611 13.822 14.5947 13.6535 14.474 13.5272L11.9753 11.0285C12.7976 10.0006 13.293 8.69995 13.293 7.28631C13.293 3.98048 10.5988 1.2876 7.29301 1.2876ZM7.29301 2.62095C9.87824 2.62095 11.9584 4.70108 11.9584 7.28631C11.9584 9.87153 9.87824 11.9569 7.29301 11.9569C4.70778 11.9569 2.62764 9.87153 2.62764 7.28631C2.62764 4.70108 4.70778 2.62095 7.29301 2.62095Z" fill="white" />
                                                    </svg>
                                                    <input type="search" placeholder="Search Cars eg. Audi Q7" class="show-search" name="name" tabindex="2" value="" aria-required="true" required="" />

                                                </div> 
                                                <div class="box-content-search" id="box-content-search">
                                                    <ul class="box-car-search">
                                                        <li><a href="inventory-page-single.html" class="car-search-item"> 
                                                            <div class="box-img">
                                                                <img src="images/resource/car-search.jpg" alt="img" /> 
                                                            </div>
                                                            <div class="info"> 
                                                                <p class="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic</p>
                                                                <span class="price">$399</span>  
                                                            </div>
                                                        </a></li>
                                                        <li><a href="inventory-page-single.html" class="car-search-item">
                                                            <div class="box-img">
                                                                <img src="images/resource/car-search.jpg" alt="img" />
                                                            </div>
                                                            <div class="info">
                                                                <p class="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic</p>
                                                                <span class="price">$399</span>
                                                            </div>
                                                        </a></li>  
                                                        <li><a href="inventory-page-single.html" class="car-search-item">
                                                            <div class="box-img">
                                                                <img src="images/resource/car-search.jpg" alt="img" />
                                                            </div>
                                                            <div class="info">
                                                                <p class="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic</p>
                                                                <span class="price">$399</span>
                                                            </div>
                                                        </a></li>
                                                        <li><a href="inventory-page-single.html" class="car-search-item">
                                                            <div class="box-img">
                                                                <img src="images/resource/car-search.jpg" alt="img" />
                                                            </div>
                                                            <div class="info">
                                                                <p class="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic</p>
                                                                <span class="price">$399</span> 
                                                            </div>
                                                        </a></li>
                                                    </ul> 
                                                    <a href="inventory-page-single.html" class="btn-view-search"> 
                                                        View Details
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_3114_6864)">
                                                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_3114_6864">
                                                                    <rect width="14" height="14" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>  
                                                    </a> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Nav Box--> */}
                                    <div class="nav-out-bar">
                                        <nav class="nav main-menu">
                                            <ul class="navigation" id="navbar">
                                                <li class="current-dropdown current"><span>Home <i class="fa-solid fa-angle-down"></i></span>
                                                    <ul class="dropdown">
                                                        <li><a href="index.html">Home 01</a></li>
                                                        <li><a href="index-2.html">Home 02</a></li>
                                                        <li><a href="index-3.html">Home 03</a></li>
                                                        <li><a href="index-4.html">Home 04</a></li>
                                                        <li><a href="index-5.html">Home 05</a></li>
                                                        <li><a href="index-6.html">Home 06</a></li>
                                                        <li><a href="index-7.html">Home 07</a></li>
                                                        <li><a href="index-8.html">Home 08</a></li>
                                                        <li><a href="index-9.html">Home 09</a></li>
                                                        <li><a href="index-10.html">Home 10</a></li>
                                                    </ul>
                                                </li>
                                                <li class="current-dropdown"><span>Inventory <i class="fa-solid fa-angle-down"></i></span>
                                                    <div class="mega-menu">
                                                        <div class="mega-column">
                                                            <h3>Inventory List</h3>
                                                            <ul>
                                                                <li><a href="inventory-list-01.html" title="">Inventory List v1</a></li>
                                                                <li><a href="inventory-list-02.html" title="">Inventory List v2</a></li>
                                                                <li><a href="inventory-map-cards.html" title="">Map - Cards</a></li>
                                                                <li><a href="inventory-map-rows.html" title="">Map - Rows</a></li>
                                                                <li><a href="inventory-sidebar-rows.html" title="">Sidebar - Rows</a></li>
                                                                <li><a href="inventory-sidebar-cards.html" title="">Sidebar - Cards</a></li>

                                                            </ul>
                                                        </div>
                                                        <div class="mega-column">
                                                            <h3>Inventory Single</h3>
                                                            <ul>
                                                                <li><a href="inventory-page-single.html" title="">Inventory Single v1</a></li>
                                                                <li><a href="inventory-page-single-v2.html" title="">Inventory Single v2</a></li>
                                                                <li><a href="inventory-page-single-v3.html" title="">Inventory Single v3</a></li>
                                                                <li><a href="inventory-page-single-v4.html" title="">Inventory Single v4</a></li>
                                                                <li><a href="inventory-page-single-v5.html" title="">Inventory Single v5</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="mega-column">
                                                            <h3>Popular Makes</h3>
                                                            <ul>
                                                                <li><a href="inventory-page-single.html" title="">Audi</a></li>
                                                                <li><a href="inventory-page-single.html" title="">BMW</a></li>
                                                                <li><a href="inventory-page-single.html" title="">Ford</a></li>
                                                                <li><a href="inventory-page-single.html" title="">Honda</a></li>
                                                                <li><a href="inventory-page-single.html" title="">Land Rover</a></li>
                                                                <li><a href="inventory-page-single.html" title="">Mercedes-Benz</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="mega-column">
                                                            <h3>Type</h3>
                                                            <ul>
                                                                <li><a href="inventory-page-single.html" title="">Sedan</a></li>
                                                                <li><a href="inventory-page-single.html" title="">SUVs</a></li>
                                                                <li><a href="inventory-page-single.html" title="">Sport Coupe</a></li>
                                                                <li><a href="inventory-page-single.html" title="">Convertible</a></li>
                                                                <li><a href="inventory-page-single.html" title="">Wagon</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="current-dropdown"><span>Blog <i class="fa-solid fa-angle-down"></i></span>
                                                    <ul class="dropdown">
                                                        <li><a href="blog-list-01.html">Blog List 01</a></li>
                                                        <li><a href="blog-list-02.html">Blog List 02</a></li>
                                                        <li><a href="blog-list-03.html">Blog List 03</a></li>
                                                        <li><a href="blog-single.html">Blog Single</a></li>
                                                    </ul>
                                                </li>
                                                <li class="current-dropdown"><span>Shop <i class="fa-solid fa-angle-down"></i></span>
                                                    <ul class="dropdown">
                                                        <li><a href="shop-list.html">Shop List</a></li>
                                                        <li><a href="shop-single.html">Shop Single</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li class="current-dropdown right-one"><span>Pages <i class="fa-solid fa-angle-down"></i></span>
                                                    <ul class="dropdown">
                                                        <li class="nav-sub"><a>Dashboard <i class="fa fa-angle-right"></i></a>
                                                            <ul class="dropdown deep subnav-menu">
                                                                <li><a href="dashboard.html" title="">Dashboard</a></li>
                                                                <li><a href="my-listings.html" title="">My Listings</a></li>
                                                                <li><a href="add-listings.html" title="">Add Listings</a></li>
                                                                <li><a href="favorite.html" title="">Favorites</a></li>
                                                                <li><a href="saved.html" title="">Saved Search</a></li>
                                                                <li><a href="messages.html" title="">Messages</a></li>
                                                                <li><a href="profile.html" title="">Profile</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a href="contact.html">Services</a></li>
                                                        <li><a href="login.html">Login</a></li>
                                                        <li><a href="faq.html">FAQs</a></li>
                                                        <li><a href="pricing.html">Pricing</a></li>
                                                        <li><a href="terms.html">Terms</a></li>
                                                        <li><a href="team-list.html">Team List</a></li>
                                                        <li><a href="team-single.html">Team Single</a></li>
                                                        <li><a href="dealer.html">Dealer List</a></li>
                                                        <li><a href="dealer-single.html">Dealer Single</a></li>
                                                        <li><a href="loan-calculator.html">Loan Calculator</a></li>
                                                        <li><a href="compare.html">Compare</a></li>
                                                        <li><a href="404.html">404</a></li>
                                                        <li><a href="invoice.html">Invoice</a></li>
                                                        <li><a href="ui-elements.html">UI Elements</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* <!-- Main Menu End--> */}
                                    </div>

                                    <div class="right-box">
                                        <a href="#" class="haeder-img"><img src="images/resource/header-img.png" /></a>
                                        <div class="mobile-navigation">
                                            <a href="#nav-mobile" title="">
                                                <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="22" height="2" fill="white" />
                                                    <rect y="9" width="22" height="2" fill="white" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Mobile Menu  --> */}
                            </div>
                        </div>

                        {/* <!-- Header Search --> */}
                        <div class="search-popup">
                            <span class="search-back-drop"></span>
                            <button class="close-search"><span class="fa fa-times"></span></button>

                            <div class="search-inner">
                                <form method="post" action="https://creativelayers.net/themes/boxcar-html/index.html">
                                    <div class="form-group">
                                        <input type="search" name="search-field" value="" placeholder="Search..." required="" />
                                            <button type="submit"><i class="fa fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- End Header Search --> */}

                        <div id="nav-mobile"></div>
                    </header>
                    {/* <!-- End header-section --> */}

                    {/* <!-- dashboard-widget --> */}
                    <section class="dashboard-widget">
                        <div class="right-box">
                            <div class="side-bar">
                                <ul class="nav-list">
                                    <li><a href="dashboard.html"><img src="images/icons/dash1.svg" alt="" />Dashboard</a></li>
                                    <li><a href="my-listings.html"><img src="images/icons/dash2.svg" alt="" />My Listings</a></li>
                                    <li><a href="add-listings.html"><img src="images/icons/dash3.svg" alt="" />Add Listings</a></li>
                                    <li><a href="favorite.html"><img src="images/icons/dash4.svg" alt="" />My Favorites</a></li>
                                    <li><a href="saved.html"><img src="images/icons/dash5.svg" alt="" />Saved Search</a></li>
                                    <li><a href="messages.html"><img src="images/icons/dash6.svg" alt="" />Messages</a></li>
                                    <li><a href="profile.html"><img src="images/icons/dash7.svg" alt="" />My Profile</a></li>
                                    <li><a href="#"><img src="images/icons/dash8.svg" alt="" />Logout</a></li>
                                </ul>
                            </div>
                            <div class="content-column">
                                <div class="inner-column">
                                    <div class="list-title">
                                        <h3 class="title">Dashboard</h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur.</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-12">
                                            <div class="uii-item">
                                                <span>My Listings</span>
                                                <h3>43,279</h3>
                                                <div class="ui-icon">
                                                    <img src="images/icons/cart1.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-12">
                                            <div class="uii-item">
                                                <span>Total Saved Search</span>
                                                <h3>19</h3>
                                                <div class="ui-icon v2">
                                                    <img src="images/icons/cart2.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-12">
                                            <div class="uii-item">
                                                <span>Messages</span>
                                                <h3>15</h3>
                                                <div class="ui-icon v3">
                                                    <img src="images/icons/cart3.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-12">
                                            <div class="uii-item">
                                                <span>My Favorites</span>
                                                <h3>22,786</h3>
                                                <div class="ui-icon v4">
                                                    <img src="images/icons/cart4.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="graph-content">
                                        <div class="row">
                                            <div class="col-xl-8">
                                                <div class="widget-graph">
                                                    <div class="graph-head">
                                                        <h3>Car Page Views</h3>
                                                        <div class="text-box">
                                                            <div class="form_boxes v3">
                                                                <small>Select Cars</small>
                                                                <div class="drop-menu">
                                                                    <div class="select">
                                                                        <span>Audi A3</span>
                                                                        <i class="fa fa-angle-down"></i>
                                                                    </div>
                                                                    <input type="hidden" name="gender" />
                                                                        <ul class="dropdown" style= {{display: "none"}}>
                                                                            <li>Audi A3</li>
                                                                            <li>Audi A3</li>
                                                                        </ul>
                                                                </div>
                                                            </div>
                                                            <div class="form_boxes v3">
                                                                <small>Date</small>
                                                                <div class="drop-menu">
                                                                    <div class="select">
                                                                        <span>15 days</span>
                                                                        <i class="fa fa-angle-down"></i>
                                                                    </div>
                                                                    <input type="hidden" name="gender" />
                                                                        <ul class="dropdown" style={{display: "none"}}>
                                                                            <li>15 days</li>
                                                                            <li>15 days</li>
                                                                        </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="widget-content">
                                                        <canvas id="chart" width="100" height="45"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4">
                                                <div class="notification-widget ls-widget">
                                                    <div class="widget-title">
                                                        <h4>Notifications</h4>
                                                    </div>
                                                    <div class="widget-content">
                                                        <ul class="notification-list">
                                                            <li><span class="icon"><img src="images/icons/lob1.svg" alt="" /></span> <strong>Wade Warren</strong> applied for a job <span class="colored">Web Developer</span></li>
                                                            <li><span class="icon"><img src="images/icons/lob2.svg" alt="" /></span> <strong>Henry Wilson</strong> applied for a job <span class="colored">Senior Product Designer</span></li>
                                                            <li class="success"><span class="icon"><img src="images/icons/lob3.svg" alt="" /></span> <strong>Raul Costa</strong> applied for a job <span class="colored">Product Manager, Risk</span></li>
                                                            <li><span class="icon"><img src="images/icons/lob1.svg" alt="" /></span> <strong>Jack Milk</strong> applied for a job <span class="colored">Technical Architect</span></li>
                                                            <li class="success"><span class="icon"><img src="images/icons/lob2.svg" alt="" /></span> <strong>Michel Arian</strong> applied for a job <span class="colored">Software Engineer</span></li>
                                                            <li><span class="icon"><img src="images/icons/lob3.svg" alt="" /></span> <strong>Ali Tufan</strong> applied for a job <span class="colored">UI Designer</span></li>
                                                        </ul>
                                                    </div>
                                                    <div class="dash-btn-box">
                                                        <a href="#" class="dash-btn">View More<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <g clip-path="url(#clip0_634_2156)">
                                                                <path d="M13.6106 0H5.05509C4.84013 0 4.66619 0.173943 4.66619 0.388901C4.66619 0.603859 4.84013 0.777802 5.05509 0.777802H12.6719L0.113453 13.3362C-0.0384687 13.4881 -0.0384687 13.7342 0.113453 13.8861C0.189396 13.962 0.288927 14 0.388422 14C0.487917 14 0.587411 13.962 0.663391 13.8861L13.2218 1.3277V8.94447C13.2218 9.15943 13.3957 9.33337 13.6107 9.33337C13.8256 9.33337 13.9996 9.15943 13.9996 8.94447V0.388901C13.9995 0.173943 13.8256 0 13.6106 0Z" fill="white"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_634_2156">
                                                                    <rect width="14" height="14" fill="white"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End dashboard-widget --> */}

                    <footer class="boxcar-footer footer-style-one v2">
                        {/* <!--  Footer Bottom --> */}
                        <div class="footer-bottom">
                            <div class="inner-container">
                                <div class="copyright-text wow fadeInUp">2024 Boxcars.com. All rights reserved.</div>
                                <ul class="footer-nav wow fadeInUp" data-wow-delay="200ms">
                                    <li><a href="#" title="">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Notice</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- End boxcar-footer --> */}


                </div>{/* <!-- End Page Wrapper --> */}

                {/* <!-- Scroll To Top --> */}
                <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>


            </div>
        </>
    )
}

export default Dashboard