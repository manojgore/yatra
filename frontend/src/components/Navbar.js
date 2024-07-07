import React from 'react'

const Navbar = () => {
    return (
        <>
            <div> 
                {/* <!-- Main Header--> */}
                <header className="boxcar-header header-style-v1 home-8">
                    <div className="header-inner">
                        <div className="boxcar-container"> 
                            {/* <!-- Main box --> */}
                            <div className="c-box"> 
                                <div className="logo-inner"> 
                                    <div className="logo"><a href="/"><img src="images/logo.jpg" alt="" title="Boxcar" /></a></div>
                                    <div className="layout-search"> 
                                        <div className="search-box">
                                            <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.29301 1.2876C3.9872 1.2876 1.29431 3.98048 1.29431 7.28631C1.29431 10.5921 3.9872 13.2902 7.29301 13.2902C8.70502 13.2902 10.0036 12.7954 11.03 11.9738L13.5287 14.4712C13.6548 14.5921 13.8232 14.6588 13.9979 14.657C14.1725 14.6552 14.3395 14.5851 14.4631 14.4617C14.5867 14.3382 14.6571 14.1713 14.6591 13.9967C14.6611 13.822 14.5947 13.6535 14.474 13.5272L11.9753 11.0285C12.7976 10.0006 13.293 8.69995 13.293 7.28631C13.293 3.98048 10.5988 1.2876 7.29301 1.2876ZM7.29301 2.62095C9.87824 2.62095 11.9584 4.70108 11.9584 7.28631C11.9584 9.87153 9.87824 11.9569 7.29301 11.9569C4.70778 11.9569 2.62764 9.87153 2.62764 7.28631C2.62764 4.70108 4.70778 2.62095 7.29301 2.62095Z" fill="white" />
                                            </svg> 
                                            <input type="search" placeholder="Search Cars eg. Audi Q7" className="show-search" name="name" tabindex="2" value="" aria-required="true" required="" />

                                        </div>  
                                        <div className="box-content-search" id="box-content-search">  
                                        <ul className="box-car-search">
                                                <li><a href="inventory-page-single.html" className="car-search-item">
                                                    <div className="box-img"> 
                                                        <img src="images/resource/car-search.jpg" alt="img" />    
                                                    </div>  
                                                    <div className="info"> 
                                                        <p className="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic</p>
                                                        <span className="price">$399</span> 
                                                    </div>   
                                                </a></li>    
                                                <li><a href="inventory-page-single.html" className="car-search-item"> 
                                                    <div className="box-img"> 
                                                        <img src="images/resource/car-search.jpg" alt="img" />   
                                                    </div> 
                                                    <div className="info">
                                                        <p className="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic</p>
                                                        <span className="price">$399</span> 
                                                    </div>  
                                                </a></li> 
                                                <li><a href="inventory-page-single.html" className="car-search-item">
                                                    <div className="box-img">
                                                        <img src="images/resource/car-search.jpg" alt="img" />
                                                    </div>   
                                                    <div className="info"> 
                                                        <p className="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic</p>
                                                        <span className="price">$399</span>
                                                    </div>
                                                </a></li>
                                                <li><a href="inventory-page-single.html" className="car-search-item">
                                                    <div className="box-img">
                                                        <img src="images/resource/car-search.jpg" alt="img" /> 
                                                    </div>
                                                    <div className="info">
                                                        <p className="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr 9G-Tronic</p>
                                                        <span className="price">$399</span> 
                                                    </div>
                                                </a></li> s
                                            </ul>
                                            <a href="inventory-page-single.html" className="btn-view-search">
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

                                {/* <!--Nav Box--> */}
                                <div className="nav-out-bar">
                                    <nav className="nav main-menu">
                                        <ul className="navigation" id="navbar">
                                            <li><a href="/">Home</a>
                                            </li>                                            
                                            <li><a href='blog'><span>Blog </span></a>  
                                            </li> 
                                            <li><a href="about.html">About</a> 
                                            </li>                                       
                                            <li className="current-dropdown"><span>Pages <i className="fa-solid fa-angle-down"></i></span>
                                                <ul className="dropdown">                                                    
                                                    <li><a href="/dashboard.js" title="">Dashboard</a></li> 
                                                    <li><a href="my-listings.html" title="">My Listings</a></li>
                                                    <li><a href="add-listings.html" title="">Add Listings</a></li>
                                                    <li><a href="favorite.html" title="">Favorites</a></li>
                                                    <li><a href="saved.html" title="">Saved Search</a></li>
                                                    <li><a href="messages.html" title="">Messages</a></li> 
                                                    <li><a href="profile.html" title="">Profile</a></li>                                                                                                            
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a>  
                                            </li>
                                        </ul>
                                    </nav>
                                    {/* <!-- Main Menu End--> */}
                                </div>

                                <div className="right-box">
                                    <a href="login.html" title="" className="box-account">
                                        <div className="icon">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_147_6490)">
                                                    <path d="M7.99998 9.01221C3.19258 9.01221 0.544983 11.2865 0.544983 15.4161C0.544983 15.7386 0.806389 16.0001 1.12892 16.0001H14.871C15.1935 16.0001 15.455 15.7386 15.455 15.4161C15.455 11.2867 12.8074 9.01221 7.99998 9.01221ZM1.73411 14.8322C1.9638 11.7445 4.06889 10.1801 7.99998 10.1801C11.9311 10.1801 14.0362 11.7445 14.2661 14.8322H1.73411Z" fill="white" />
                                                    <path d="M7.99999 0C5.79171 0 4.12653 1.69869 4.12653 3.95116C4.12653 6.26959 5.86415 8.15553 7.99999 8.15553C10.1358 8.15553 11.8735 6.26959 11.8735 3.95134C11.8735 1.69869 10.2083 0 7.99999 0ZM7.99999 6.98784C6.50803 6.98784 5.2944 5.62569 5.2944 3.95134C5.2944 2.3385 6.43231 1.16788 7.99999 1.16788C9.54259 1.16788 10.7056 2.36438 10.7056 3.95134C10.7056 5.62569 9.49196 6.98784 7.99999 6.98784Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_147_6490">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        Sign in</a>
                                    <div className="btn">
                                        <a href="#" className="header-btn-eight">Add Booking</a>
                                    </div>
                                    <div className="mobile-navigation">
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
                    <div className="search-popup">
                        <span className="search-back-drop"></span>
                        <button className="close-search"><span className="fa fa-times"></span></button> 

                        <div className="search-inner">
                            <form method="post" action="https://creativelayers.net/themes/boxcar-html/index.html">
                                <div className="form-group">
                                    <input type="search" name="search-field" value="" placeholder="Search..." required="" />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </div> 
                            </form>
                        </div>
                    </div>
                    {/* <!-- End Header Search --> */}

                    <div id="nav-mobile"></div> 
                </header>
                {/* <!-- End header-section --> */}
                
            </div>
        </>
    )
}

export default Navbar