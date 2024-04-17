import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <div className="boxcar-wrapper">

        {/* <!-- Main Header--> */}
        <header className="boxcar-header header-style-v1 home-8">
          <div className="header-inner">
            <div className="boxcar-container">
              {/* <!-- Main box --> */}
              <div className="c-box">
                <div className="logo-inner">
                  <div className="logo"><a href="index.html"><img src="images/logo.svg" alt="" title="Boxcar" /></a></div>
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
                        </a></li>
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
                      <li className="current-dropdown current"><span>Home <i className="fa-solid fa-angle-down"></i></span>
                        <ul className="dropdown">
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
                      <li className="current-dropdown"><span>Inventory <i className="fa-solid fa-angle-down"></i></span>
                        <div className="mega-menu">
                          <div className="mega-column">
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
                          <div className="mega-column">
                            <h3>Inventory Single</h3>
                            <ul>
                              <li><a href="inventory-list-01.html" title="">Inventory List v1</a></li>
                              <li><a href="inventory-list-02.html" title="">Inventory List v2</a></li>
                              <li><a href="inventory-map-cards.html" title="">Map - Cards</a></li>
                              <li><a href="inventory-map-rows.html" title="">Map - Rows</a></li>
                              <li><a href="inventory-sidebar-rows.html" title="">Sidebar - Rows</a></li>
                              <li><a href="inventory-sidebar-cards.html" title="">Sidebar - Cards</a></li>

                            </ul>
                          </div>
                          <div className="mega-column">
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
                          <div className="mega-column">
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
                      <li className="current-dropdown"><span>Blog <i className="fa-solid fa-angle-down"></i></span>
                        <ul className="dropdown">
                          <li><a href="blog-list-01.html">Blog List 01</a></li>
                          <li><a href="blog-list-02.html">Blog List 02</a></li>
                          <li><a href="blog-list-03.html">Blog List 03</a></li>
                          <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                      </li>
                      <li className="current-dropdown"><span>Shop <i className="fa-solid fa-angle-down"></i></span>
                        <ul className="dropdown">
                          <li><a href="shop-list.html">Shop List</a></li>
                          <li><a href="shop-single.html">Shop Single</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                      </li>
                      <li className="current-dropdown"><span>Pages <i className="fa-solid fa-angle-down"></i></span>
                        <ul className="dropdown">
                          <li className="nav-sub"><a>Dashboard <i className="fa fa-angle-right"></i></a>
                            <ul className="dropdown deep subnav-menu">
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
                    <a href="#" className="header-btn-eight">Add Listing</a>
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

        {/* <!-- BANNER SECTION --> */}
        <section className="boxcar-banner-section-v8">
          <div className="boxcar-container">
            <div className="banner-content-v8">
              <h2 className="wow fadeInUp">Let’s Find Your Perfect Car</h2>
              <div className="banner-v8-form wow fadeInUp" data-wow-delay="200ms">
                <ul className="form-tabs-list">
                  <li className="current" data-tab="tab-1">New</li>
                  <li data-tab="tab-2">Used</li>
                </ul>
                <div className="form-tab-content">
                  <div className="form-tab-pane current" id="tab-1">
                    <form>
                      <div className="form_boxes">
                        <div className="drop-menu">
                          <label>Any Makes</label>
                          <div className="select">
                            <span>Any Makes</span>
                            <i className="fa fa-angle-down"></i>
                          </div>
                          <input type="hidden" name="gender" />
                            <ul className="dropdown" style="display: none;">
                              <li>Audi</li>
                              <li>Honda</li>
                            </ul>
                        </div>
                      </div>
                      <div className="form_boxes">
                        <div className="drop-menu">
                          <label>Any Models</label>
                          <div className="select">
                            <span>Any Models</span>
                            <i className="fa fa-angle-down"></i>
                          </div>
                          <input type="hidden" name="gender" />
                            <ul className="dropdown" style="display: none;">
                              <li>A3</li>
                              <li>Accord</li>
                            </ul>
                        </div>
                      </div>
                      <div className="form_boxes">
                        <div className="drop-menu">
                          <label>Any Price</label>
                          <div className="select">
                            <span>Any Price</span>
                            <i className="fa fa-angle-down"></i>
                          </div>
                          <input type="hidden" name="gender" />
                            <ul className="dropdown" style="display: none;">
                              <li>200$</li>
                              <li>300$</li>
                            </ul>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="theme-btn"><i className="flaticon-search"></i>Search 9451 Cars</button>
                      </div>
                    </form>
                  </div>
                  <div className="form-tab-pane" id="tab-2">
                    <form>
                      <div className="form_boxes">
                        <div className="drop-menu">
                          <label>Any Makes</label>
                          <div className="select">
                            <span>Any Makes</span>
                            <i className="fa fa-angle-down"></i>
                          </div>
                          <input type="hidden" name="gender" />
                            <ul className="dropdown" style="display: none;">
                              <li>Audi</li>
                              <li>Honda</li>
                            </ul>
                        </div>
                      </div>
                      <div className="form_boxes">
                        <div className="drop-menu">
                          <label>Any Models</label>
                          <div className="select">
                            <span>Any Models</span>
                            <i className="fa fa-angle-down"></i>
                          </div>
                          <input type="hidden" name="gender" />
                            <ul className="dropdown" style="display: none;">
                              <li>A3</li>
                              <li>Accord</li>
                            </ul>
                        </div>
                      </div>
                      <div className="form_boxes">
                        <div className="drop-menu">
                          <label>Any Price</label>
                          <div className="select">
                            <span>Any Price</span>
                            <i className="fa fa-angle-down"></i>
                          </div>
                          <input type="hidden" name="gender" />
                            <ul className="dropdown" style="display: none;">
                              <li>200$</li>
                              <li>300$</li>
                            </ul>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="theme-btn"><i className="flaticon-search"></i>Search 9451 Cars</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- BANNER SECTION END --> */}

        {/* <!-- brand section --> */}
        <section className="boxcar-brand-section-six">
          <div className="boxcar-container">
            <div className="boxcar-title wow fadeInUp">
              <h2>Browse by Type</h2>
              <a href="#" className="btn-title">View All<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><g clip-path="url(#clip0_601_3199)"><path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#050B20" /></g><defs><clipPath id="clip0_601_3199"><rect width="14" height="14" fill="white" /></clipPath></defs></svg></a>
            </div>
            <div className="right-box">
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp">
                  <div className="image-box">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_130_4383)">
                        <path d="M30.9565 20.1739H29.913V14.9565C29.913 13.2304 28.5087 11.8261 26.7826 11.8261H23.3608L21.9874 7.70562C21.5605 6.42537 20.367 5.56519 19.0175 5.56519C18.855 5.56519 7.57394 5.56519 7.30431 5.56519C5.94394 5.56519 4.78412 6.43762 4.35337 7.65212H3.13044C1.40431 7.65212 0 9.05644 0 10.7826V14.9565C0 16.6826 1.40431 18.0869 3.13044 18.0869H4.17394V20.1739H3.13044C2.55419 20.1739 2.08694 20.6411 2.08694 21.2174C2.08694 21.7937 2.55413 22.2609 3.13044 22.2609C4.10769 22.2609 5.28038 22.2609 6.26088 22.2609C6.26088 24.5624 8.13331 26.4348 10.4348 26.4348C12.7363 26.4348 14.6088 24.5624 14.6088 22.2609H19.4783C19.4783 24.5624 21.3507 26.4348 23.6523 26.4348C25.9538 26.4348 27.8262 24.5624 27.8262 22.2609C28.807 22.2609 29.9801 22.2609 30.9566 22.2609C31.5329 22.2609 32.0001 21.7937 32.0001 21.2174C32.0001 20.6411 31.5328 20.1739 30.9565 20.1739ZM4.17394 15.9999H3.13044C2.55506 15.9999 2.08694 15.5318 2.08694 14.9564V10.7825C2.08694 10.2071 2.55506 9.739 3.13044 9.739H4.17394C4.17394 10.4039 4.17394 15.3552 4.17394 15.9999ZM14.6087 7.65212H16.3478H19.0175C19.4674 7.65212 19.8652 7.93887 20.0074 8.36556L21.1609 11.826H14.6087V7.65212ZM6.26088 8.69556C6.26088 8.12019 6.729 7.65206 7.30438 7.65206H12.5218V11.826H6.26088V8.69556ZM10.4348 24.3477C9.28406 24.3477 8.34787 23.4116 8.34787 22.2608C8.34787 21.1101 9.28406 20.1739 10.4348 20.1739C11.5856 20.1739 12.5218 21.1101 12.5218 22.2608C12.5218 23.4116 11.5856 24.3477 10.4348 24.3477ZM23.6522 24.3477C22.5014 24.3477 21.5653 23.4116 21.5653 22.2608C21.5653 21.1101 22.5014 20.1739 23.6522 20.1739C24.8029 20.1739 25.7391 21.1101 25.7391 22.2608C25.7391 23.4116 24.8029 24.3477 23.6522 24.3477ZM27.8261 20.1739H27.2646C26.5417 18.9276 25.1937 18.0869 23.6522 18.0869C22.1107 18.0869 20.7627 18.9276 20.0398 20.1739H14.0472C13.3243 18.9276 11.9763 18.0869 10.4348 18.0869C8.89331 18.0869 7.54531 18.9276 6.82244 20.1739H6.26094V17.0434V13.913C7.96256 13.913 25.6653 13.913 26.7827 13.913C27.3581 13.913 27.8262 14.3811 27.8262 14.9565V20.1739H27.8261Z" fill="#050B20" />
                        <path d="M17.7388 16H15.6519C15.0756 16 14.6084 16.4672 14.6084 17.0435C14.6084 17.6198 15.0756 18.087 15.6519 18.087H17.7388C18.3151 18.087 18.7823 17.6198 18.7823 17.0435C18.7823 16.4672 18.3151 16 17.7388 16Z" fill="#050B20" />
                      </g>
                      <defs>
                        <clipPath id="clip0_130_4383">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">SUV</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp" data-wow-delay="100ms">
                  <div className="image-box">
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_130_4394)">
                        <path d="M31.259 15.5873L25.3898 14.6086C25.0466 14.0512 24.3644 13.0429 23.3725 12.0327C21.3927 10.0164 19.1133 8.95068 16.7806 8.95068H7.2225C5.66993 8.95068 4.23044 9.79012 3.46577 11.1414L0.831898 15.7962C0.827648 15.8037 0.824461 15.8115 0.82041 15.8191C0.616676 16.1837 0.5 16.6033 0.5 17.0499V21.9548C0.5 22.5049 0.945984 22.9508 1.49609 22.9508H4.68632C5.15455 24.176 6.348 25.0494 7.74339 25.0494C9.13879 25.0494 10.3322 24.176 10.8005 22.9508H23.172C23.6402 24.176 24.8336 25.0494 26.229 25.0494C27.6244 25.0494 28.8178 24.176 29.286 22.9508H33.5039C34.054 22.9508 34.5 22.5049 34.5 21.9548V19.3178C34.5 17.4492 33.1077 15.8482 31.259 15.5873ZM22.8976 14.5182H15.722V10.9429H16.7806C19.604 10.9429 21.7363 13.0302 22.8976 14.5182ZM9.07371 10.9429H13.7299V14.5182H9.07371V10.9429ZM5.19964 12.1225C5.58811 11.436 6.30012 10.9953 7.08152 10.9477V14.5182H3.84402L5.19964 12.1225ZM7.74339 23.0572C7.03929 23.0572 6.46647 22.494 6.46647 21.8016C6.46647 21.1093 7.03929 20.546 7.74339 20.546C8.4475 20.546 9.02032 21.1093 9.02032 21.8016C9.02032 22.494 8.4475 23.0572 7.74339 23.0572ZM26.229 23.0572C25.5248 23.0572 24.952 22.494 24.952 21.8016C24.952 21.1093 25.5249 20.546 26.229 20.546C26.9331 20.546 27.5059 21.1093 27.5059 21.8016C27.5059 22.494 26.9331 23.0572 26.229 23.0572ZM29.3857 20.9586C29.0111 19.5753 27.7381 18.5538 26.229 18.5538C24.7198 18.5538 23.4469 19.5753 23.0721 20.9586H10.9001C10.5255 19.5753 9.25254 18.5538 7.74339 18.5538C6.23425 18.5538 4.9613 19.5753 4.58657 20.9586H2.49219V17.0499C2.49219 16.7524 2.73417 16.5104 3.03167 16.5104H24.683L30.9445 17.5546C30.9541 17.5562 30.9637 17.5577 30.9734 17.559C31.1428 17.5822 31.304 17.6295 31.4541 17.6967C31.0374 17.8159 30.732 18.1988 30.732 18.6538C30.732 19.2039 31.178 19.6499 31.7281 19.6499H32.5078V20.9587H29.3857V20.9586Z" fill="#050B20" />
                      </g>
                      <defs>
                        <clipPath id="clip0_130_4394">
                          <rect width="34" height="34" fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Sedan</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp" data-wow-delay="200ms">
                  <div className="image-box">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.5625 13.8124H25.3194C25.1795 13.8133 25.0409 13.7865 24.9115 13.7336C24.782 13.6807 24.6643 13.6028 24.565 13.5043L21.7387 10.6781C21.0418 9.9811 20.2132 9.42962 19.3012 9.0557C18.3891 8.68177 17.4119 8.49286 16.4263 8.49995H7.4375C6.02854 8.49995 4.67728 9.05966 3.681 10.0559C2.68471 11.0522 2.125 12.4035 2.125 13.8124V19.1249C2.125 19.9703 2.46083 20.7811 3.0586 21.3789C3.65637 21.9766 4.46712 22.3124 5.3125 22.3124C5.3125 23.2987 5.7043 24.2446 6.4017 24.942C7.0991 25.6394 8.04498 26.0312 9.03125 26.0312C10.0175 26.0312 10.9634 25.6394 11.6608 24.942C12.3582 24.2446 12.75 23.2987 12.75 22.3124H20.2938C20.4112 23.2014 20.8478 24.0174 21.5221 24.6085C22.1965 25.1996 23.0626 25.5255 23.9594 25.5255C24.8561 25.5255 25.7223 25.1996 26.3966 24.6085C27.071 24.0174 27.5075 23.2014 27.625 22.3124H28.6875C29.5329 22.3124 30.3436 21.9766 30.9414 21.3789C31.5392 20.7811 31.875 19.9703 31.875 19.1249C31.875 17.716 31.3153 16.3647 30.319 15.3684C29.3227 14.3722 27.9715 13.8124 26.5625 13.8124ZM16.4794 10.6249C17.1775 10.6237 17.869 10.7601 18.5144 11.0262C19.1598 11.2924 19.7464 11.6832 20.2406 12.1762L21.8769 13.8124H8.755C8.55699 13.8138 8.36253 13.7598 8.19357 13.6566C8.0246 13.5533 7.88785 13.4049 7.79875 13.2281L6.56625 10.7631C6.84804 10.6734 7.14178 10.6268 7.4375 10.6249H16.4794ZM4.25 19.1249V13.8124C4.25058 13.1672 4.44694 12.5374 4.81313 12.0062L5.87563 14.1312C6.13626 14.6733 6.54495 15.1305 7.05446 15.4501C7.56398 15.7698 8.15353 15.9387 8.755 15.9374H14.875V20.1874H12.3781C12.0797 19.5519 11.6064 19.0144 11.0137 18.638C10.421 18.2615 9.7334 18.0616 9.03125 18.0616C8.3291 18.0616 7.64146 18.2615 7.04876 18.638C6.45607 19.0144 5.98282 19.5519 5.68437 20.1874H5.3125C5.03071 20.1874 4.76046 20.0755 4.5612 19.8763C4.36194 19.677 4.25 19.4067 4.25 19.1249ZM9.03125 23.3749C8.71604 23.3749 8.4079 23.2815 8.14581 23.1064C7.88372 22.9312 7.67944 22.6823 7.55882 22.3911C7.43819 22.0999 7.40663 21.7794 7.46812 21.4703C7.52962 21.1611 7.68141 20.8771 7.9043 20.6542C8.12719 20.4314 8.41117 20.2796 8.72032 20.2181C9.02948 20.1566 9.34993 20.1881 9.64115 20.3088C9.93237 20.4294 10.1813 20.6337 10.3564 20.8958C10.5315 21.1578 10.625 21.466 10.625 21.7812C10.625 22.2039 10.4571 22.6093 10.1582 22.9081C9.85932 23.207 9.45394 23.3749 9.03125 23.3749ZM23.9062 23.3749C23.591 23.3749 23.2829 23.2815 23.0208 23.1064C22.7587 22.9312 22.5544 22.6823 22.4338 22.3911C22.3132 22.0999 22.2816 21.7794 22.3431 21.4703C22.4046 21.1611 22.5564 20.8771 22.7793 20.6542C23.0022 20.4314 23.2862 20.2796 23.5953 20.2181C23.9045 20.1566 24.2249 20.1881 24.5162 20.3088C24.8074 20.4294 25.0563 20.6337 25.2314 20.8958C25.4065 21.1578 25.5 21.466 25.5 21.7812C25.5 22.2039 25.3321 22.6093 25.0332 22.9081C24.7343 23.207 24.3289 23.3749 23.9062 23.3749ZM28.6875 20.1874H27.2531C26.9547 19.5519 26.4814 19.0144 25.8887 18.638C25.296 18.2615 24.6084 18.0616 23.9062 18.0616C23.2041 18.0616 22.5165 18.2615 21.9238 18.638C21.3311 19.0144 20.8578 19.5519 20.5594 20.1874H17V15.9374H26.5625C27.0081 15.9398 27.4482 16.0356 27.8545 16.2186C28.2608 16.4017 28.6242 16.6678 28.9212 16.9999H28.6875C28.4057 16.9999 28.1355 17.1119 27.9362 17.3111C27.7369 17.5104 27.625 17.7807 27.625 18.0624C27.625 18.3442 27.7369 18.6145 27.9362 18.8138C28.1355 19.013 28.4057 19.1249 28.6875 19.1249H29.75C29.75 19.4067 29.6381 19.677 29.4388 19.8763C29.2395 20.0755 28.9693 20.1874 28.6875 20.1874Z" fill="#050B20" />
                    </svg>

                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Hatchback</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp" data-wow-delay="300ms">
                  <div className="image-box">
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_130_4407)">
                        <path d="M29.6539 12.9591H26.9432C26.0374 11.6291 24.8322 10.5173 23.4281 9.72437C21.8558 8.83644 20.0704 8.36719 18.265 8.36719H17.5C16.9451 8.36719 16.4953 8.81699 16.4953 9.37184V12.9591H5.3461C2.89815 12.9591 0.869644 14.784 0.546173 17.1445C0.542542 17.1673 0.539429 17.1901 0.537354 17.2135C0.513748 17.4078 0.5 17.6049 0.5 17.8054V21.6469C0.5 22.2017 0.949799 22.6515 1.50465 22.6515H5.01978C5.46672 24.3781 7.0379 25.6567 8.90221 25.6567C10.7665 25.6567 12.3377 24.3781 12.7846 22.6515H22.2154C22.6626 24.3781 24.2335 25.6567 26.0978 25.6567C27.9621 25.6567 29.533 24.3781 29.9802 22.6515H33.4953C34.0502 22.6515 34.5 22.2017 34.5 21.6469V17.8054C34.5 15.1331 32.326 12.9591 29.6539 12.9591ZM18.5047 10.3801C20.7251 10.4437 22.8312 11.3907 24.3588 12.9591H18.5047V10.3801ZM2.50931 18.304H4.06104C4.61589 18.304 5.06569 17.8542 5.06569 17.2993C5.06569 16.7445 4.61589 16.2947 4.06104 16.2947H2.94691C3.44989 15.4986 4.33704 14.9686 5.3461 14.9686H16.4953V20.6422H12.7846C12.3374 18.9157 10.7665 17.6368 8.90221 17.6368C7.0379 17.6368 5.46698 18.9157 5.01978 20.6422H2.50931V18.304ZM10.9027 21.6469C10.9027 22.7501 10.0054 23.6474 8.90221 23.6474C7.79898 23.6474 6.90172 22.7501 6.90172 21.6469C6.90172 20.5437 7.79898 19.6464 8.90221 19.6464C10.0054 19.6464 10.9027 20.5437 10.9027 21.6469ZM28.0983 21.6469C28.0983 22.7501 27.201 23.6474 26.0978 23.6474C24.9946 23.6474 24.0973 22.7501 24.0973 21.6469C24.0973 20.5437 24.9946 19.6464 26.0978 19.6464C27.201 19.6464 28.0983 20.5437 28.0983 21.6469ZM29.9802 20.6422C29.5333 18.9157 27.9621 17.6368 26.0978 17.6368C24.2335 17.6368 22.6623 18.9157 22.2154 20.6422H18.5047V14.9686H29.6539C30.6451 14.9686 31.519 15.4802 32.0264 16.2527H30.4715C29.9167 16.2527 29.4669 16.7025 29.4669 17.2573C29.4669 17.8122 29.9167 18.2622 30.4715 18.2622H32.4907V20.6422H29.9802Z" fill="#050B20" />
                      </g>
                      <defs>
                        <clipPath id="clip0_130_4407">
                          <rect width="34" height="34" fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Coupe</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp" data-wow-delay="400ms">
                  <div className="image-box">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.5394 15.7463L26.3033 14.0526L23.8414 8.30769C23.3378 7.13362 22.1882 6.375 20.9111 6.375H11.1658C9.75056 6.375 8.48938 7.32594 8.1005 8.687L6.63637 13.8125H4.25C3.07806 13.8125 2.125 14.7656 2.125 15.9375V22.3125C2.125 23.4844 3.07806 24.4375 4.25 24.4375H6.52588C7.00081 26.265 8.65088 27.625 10.625 27.625C12.5991 27.625 14.2492 26.265 14.7241 24.4375H19.2759C19.7508 26.265 21.4009 27.625 23.375 27.625C25.3491 27.625 26.9992 26.265 27.4741 24.4375H29.75C30.9219 24.4375 31.875 23.4844 31.875 22.3125V17.7193C31.875 16.8449 31.3512 16.0703 30.5394 15.7463ZM10.625 25.5C9.45306 25.5 8.5 24.5469 8.5 23.375C8.5 22.2031 9.45306 21.25 10.625 21.25C11.7969 21.25 12.75 22.2031 12.75 23.375C12.75 24.5469 11.7969 25.5 10.625 25.5ZM23.375 25.5C22.2031 25.5 21.25 24.5469 21.25 23.375C21.25 22.2031 22.2031 21.25 23.375 21.25C24.5469 21.25 25.5 22.2031 25.5 23.375C25.5 24.5469 24.5469 25.5 23.375 25.5ZM29.75 22.3125H27.4741C26.9992 20.485 25.3491 19.125 23.375 19.125C21.4009 19.125 19.7508 20.485 19.2759 22.3125H14.7241C14.2492 20.485 12.5991 19.125 10.625 19.125C8.65088 19.125 7.00081 20.485 6.52588 22.3125H4.25V15.9375H7.4375C7.91138 15.9375 8.32894 15.623 8.45856 15.1672L10.1426 9.27137C10.2733 8.81662 10.693 8.5 11.1658 8.5H20.9111C21.3361 8.5 21.7196 8.75287 21.8875 9.14387L24.5225 15.2936C24.633 15.5529 24.8423 15.7569 25.1037 15.8621L29.75 17.7193V22.3125Z" fill="#050B20" />
                      <path d="M15.3481 18.9465C14.8604 18.6214 14.7287 17.9616 15.0538 17.4728L16.077 15.9375H14.8753C14.4833 15.9375 14.1231 15.7218 13.9382 15.3765C13.7533 15.0312 13.7735 14.6115 13.9913 14.2864L16.1163 11.0989C16.4414 10.6102 17.1013 10.4784 17.59 10.8046C18.0777 11.1297 18.2094 11.7895 17.8843 12.2783L16.8611 13.8125H18.0628C18.4549 13.8125 18.8151 14.0282 18.9999 14.3735C19.1848 14.7188 19.1646 15.1385 18.9468 15.4637L16.8218 18.6512C16.4956 19.141 15.8348 19.2717 15.3481 18.9465Z" fill="#050B20" />
                    </svg>

                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Hybrid</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp" data-wow-delay="500ms">
                  <div className="image-box">
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_130_4423" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="34">
                        <path d="M0.5 3.8147e-06H34.5V34H0.5V3.8147e-06Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_130_4423)">
                        <path d="M6.875 21.7812H5.18031C3.3143 21.7812 1.77168 20.3934 1.52996 18.5938C1.50738 18.4311 1.49609 18.2657 1.49609 18.097V15.4062H10.6442H14.4453H22.8125L33.5039 16.4688V18.097C33.5039 20.1324 31.8517 21.7812 29.8197 21.7812H28.125" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.875 21.7812H15.7914H11.125" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.125 21.7813C11.125 22.9548 10.1736 23.9062 9 23.9062C7.8264 23.9062 6.875 22.9548 6.875 21.7813C6.875 20.6077 7.8264 19.6563 9 19.6563C10.1736 19.6563 11.125 20.6077 11.125 21.7813Z" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M28.125 21.7813C28.125 22.9548 27.1736 23.9062 26 23.9062C24.8264 23.9062 23.875 22.9548 23.875 21.7813C23.875 20.6077 24.8264 19.6563 26 19.6563C27.1736 19.6563 28.125 20.6077 28.125 21.7813Z" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.15656 18.5938H1.53027" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.644 15.4062L10.1034 12.8436C9.89025 11.8389 10.5311 10.8514 11.5358 10.6383C12.5405 10.4245 13.528 11.0659 13.7411 12.07C14.6289 16.2735 14.1724 14.1113 15.7911 21.7812" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.8125 15.4062L20.6875 10.0938" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.49609 15.4062C2.50593 13.1443 4.75153 11.6875 7.22875 11.6875H10.2292" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Convertible</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp" data-wow-delay="300ms">
                  <div className="image-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <mask id="mask0_130_4528" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                        <path d="M0 3.8147e-06H34V34H0V3.8147e-06Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_130_4528)">
                        <path d="M29.8033 23.9351H30.3366C31.8036 23.9351 33.0039 22.7347 33.0039 21.2677V17C33.0039 15.533 32.0437 14.3327 30.87 14.3327H28.7362L26.5861 9.31586C26.0083 7.96734 24.3351 6.86427 22.8681 6.86427H3.66343C2.19639 6.86427 0.996094 8.0645 0.996094 9.53141V21.2677C0.996094 22.7347 2.19639 23.9351 3.66343 23.9351H4.19707" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5988 23.935C10.5988 25.7027 9.16571 27.1357 7.39805 27.1357C5.63031 27.1357 4.19727 25.7027 4.19727 23.935C4.19727 22.1672 5.63031 20.7342 7.39805 20.7342C9.16571 20.7342 10.5988 22.1672 10.5988 23.935Z" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.8027 23.935C29.8027 25.7027 28.3696 27.1357 26.6021 27.1357C24.8346 27.1357 23.4014 25.7027 23.4014 23.935C23.4014 22.1672 24.8346 20.7342 26.6021 20.7342C28.3696 20.7342 29.8027 22.1672 29.8027 23.935Z" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5986 23.9351H23.4018" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 23.9351V6.86427" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M28.7365 14.3328H22.335V6.86425" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.7329 15.3997H11.666" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M33.0037 18.6003H31.4033" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Van</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp" data-wow-delay="400ms">
                  <div className="image-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                      <g clip-path="url(#clip0_130_4553)">
                        <path d="M32.2415 14.1559L30.2088 8.1182C29.6364 6.41887 28.0473 5.27734 26.2543 5.27734H22.7242C21.8084 5.27734 21.064 6.02242 21.064 6.9375V14.1545H1.49609C0.94625 14.1545 0.5 14.6008 0.5 15.1506V22.7541C0.5 24.0358 1.54258 25.0784 2.82422 25.0784H4.5727C5.02957 27.1602 6.88895 28.7227 9.10559 28.7227C11.3222 28.7227 13.1809 27.1602 13.6378 25.0784H23.3491C23.8059 27.1602 25.6646 28.7227 27.8813 28.7227C30.1026 28.7227 31.9646 27.1536 32.4168 25.0657C33.5856 24.9449 34.5 23.9541 34.5 22.7541V16.4787C34.5 15.219 33.4926 14.1904 32.2415 14.1559ZM26.2543 7.26953C27.1913 7.26953 28.0221 7.86586 28.3202 8.75371L30.1391 14.1545V14.1546H23.0562V7.26953H26.2543ZM2.49219 22.7541V16.1467H21.064V23.0862H13.6378C13.1809 21.005 11.3222 19.4425 9.10559 19.4425C6.88895 19.4425 5.02957 21.005 4.5727 23.0862H2.82422C2.64094 23.0862 2.49219 22.9374 2.49219 22.7541ZM9.10559 26.7305C7.22848 26.7305 5.94445 24.8191 6.65188 23.0862C7.04633 22.1186 7.99727 21.4346 9.10559 21.4346C10.2139 21.4346 11.1642 22.1186 11.5586 23.0862C12.2642 24.8147 10.9869 26.7305 9.10559 26.7305ZM23.0562 16.1468C23.8715 16.1468 31.1649 16.1467 32.1758 16.1467C32.3591 16.1467 32.5078 16.2955 32.5078 16.4787C32.464 22.9421 32.6103 22.8161 32.3949 23.0025C31.9068 20.9632 30.068 19.4425 27.8813 19.4425C25.6646 19.4425 23.8059 21.005 23.3491 23.0862H23.0562V16.1468ZM25.4282 25.0784C24.7208 23.3452 26.0055 21.4346 27.8813 21.4346C29.7492 21.4346 31.0465 23.3353 30.335 25.0784C29.4394 27.2767 26.3241 27.2774 25.4282 25.0784Z" fill="#050B20" />
                      </g>
                      <defs>
                        <clipPath id="clip0_130_4553">
                          <rect width="34" height="34" fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Truck</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-six home-8">
                <div className="inner-box wow fadeInUp" data-wow-delay="500ms">
                  <div className="image-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <g clip-path="url(#clip0_130_4574)">
                        <path d="M7.58024 31.8748C9.05004 31.8748 10.2415 30.6833 10.2415 29.2135C10.2415 27.7438 9.05004 26.5522 7.58024 26.5522C6.11045 26.5522 4.91895 27.7438 4.91895 29.2135C4.91895 30.6833 6.11045 31.8748 7.58024 31.8748Z" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.3976 31.8748C27.8674 31.8748 29.0589 30.6833 29.0589 29.2135C29.0589 27.7438 27.8674 26.5522 26.3976 26.5522C24.9278 26.5522 23.7363 27.7438 23.7363 29.2135C23.7363 30.6833 24.9278 31.8748 26.3976 31.8748Z" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.91884 29.2136H0.996094V21.5615C4.44769 18.0638 9.15682 16.095 14.0708 16.095H14.119C18.3032 16.095 22.33 18.409 25.3796 21.2737L30.5398 22.6368C31.9921 23.0205 33.0039 24.3342 33.0039 25.8364V29.2135H29.0589" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.77246 18.0752L7.26959 19.6025C8.31741 20.6715 9.75126 21.2739 11.2481 21.2739H25.3792" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.2412 29.2136H23.736" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.0508 25.2581H17.9485" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.98828 19.8156V10.6138C2.98828 9.22635 4.11307 8.10156 5.50056 8.10156H8.10156" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.4141 11.4219H9.78589C8.85567 11.4219 8.10156 10.6678 8.10156 9.73755V6.46558C8.10156 5.53536 8.85567 4.78125 9.78589 4.78125H13.4141V11.4219Z" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.4141 6.10938H16.7344" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.4141 10.0938H16.7344" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.0938 8.2183L26.4711 9.5957L28.8286 7.23828" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M27.0273 14.0781C30.3281 14.0781 33.0039 11.4023 33.0039 8.10156C33.0039 4.8008 30.3281 2.125 27.0273 2.125C23.7266 2.125 21.0508 4.8008 21.0508 8.10156C21.0508 11.4023 23.7266 14.0781 27.0273 14.0781Z" stroke="#050B20" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_130_4574">
                          <rect width="34" height="34" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Electric</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End brand section --> */}

        {/* <!-- brand section --> */}
        <section className="boxcar-brand-section-five pt-0">
          <div className="boxcar-container">
            <div className="boxcar-title">
              <h2 className="wow fadeInUp">Explore Our Premium Brands</h2>
              <a href="#" className="btn-title">Show All Brands<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><g clip-path="url(#clip0_601_3199)"><path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#050B20" /></g><defs><clipPath id="clip0_601_3199"><rect width="14" height="14" fill="white" /></clipPath></defs></svg></a>
            </div>
            <div className="right-box">
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-1.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Audi</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="100ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-2.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">BMW</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="200ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-3.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">ford</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="300ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-4.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes Benz</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="400ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-5.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Peugeot</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="500ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-6.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Volkswagen</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="500ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-7.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Bentley</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="500ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-8.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Nissan</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="500ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand5-9.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Jeep</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- cars-block --> */}
              <div className="cars-block-five">
                <div className="inner-box wow fadeInUp" data-wow-delay="500ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/brand10-10.png" alt="" /></a></figure>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Skoda</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End brand section --> */}

        {/* <!-- cars-section-ten --> */}
        <section className="cars-section-ten v8 pt-0">
          <div className="large-container">
            <div className="right-box">
              <div className="boxcar-title wow fadeInUp">
                <h2>Recently Added</h2>
                <a href="#" className="btn-title">View All<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <g clip-path="url(#clip0_601_243)">
                    <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#050B20" />
                  </g>
                  <defs>
                    <clipPath id="clip0_601_243">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                </a>
              </div>
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">New Cars</button>
                  <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Used Cars</button>
                  <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">In Stock</button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className="row car-slider-three wow fadeInUp" data-wow-delay="200ms" data-preview="4">
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-1.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Low Mileage</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box two">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-3.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Great Price</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-4.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Low Mileage</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
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
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div className="row car-slider-three wow fadeInUp" data-wow-delay="200ms" data-preview="4">
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-1.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Low Mileage</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box two">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-3.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Great Price</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-4.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Low Mileage</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
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
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <div className="row car-slider-three wow fadeInUp" data-wow-delay="200ms" data-preview="4">
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-1.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Low Mileage</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box two">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-3.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Great Price</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-4.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <span>Low Mileage</span>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- car-block-ten --> */}
                    <div className="box-car car-block-ten col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="slider-thumb">
                            <div className="image"><a href="#"><img src="images/resource/shop3-2.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-5.jpg" alt="" /></a></div>
                            <div className="image"><a href="#"><img src="images/resource/shop3-7.jpg" alt="" /></a></div>
                          </div>
                          <a href="#" className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <g clip-path="url(#clip0_601_1274)">
                                <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_1274">
                                  <rect width="12" height="12" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <div className="content-box">
                          <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                          <ul>
                            <li>26,786 kms</li>
                            <li>Petrol</li>
                            <li>Automatic</li>
                          </ul>
                          <div className="btn-box">
                            <small>$399</small>
                            <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_601_4346)">
                                <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                              </g>
                              <defs>
                                <clipPath id="clip0_601_4346">
                                  <rect width="14" height="14" fill="white" />
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
          </div>
        </section>
        {/* <!-- End shop section ten --> */}

        {/* <!-- why choose us section --> */}
        <section className="why-choose-us-section pt-0">
          <div className="boxcar-container">
            <div className="row">
              <div className="content-column-two col-lg-6 col-lg-6 col-sm-12">
                <div className="boxcar-title wow fadeInUp">
                  <h2 className="title">We're BIG on what <br />matters to you</h2>
                  <div className="text">We are committed to providing our customers with exceptional <br />
                    service, competitive pricing, and a wide range of.</div>
                  <a href="#" className="read-more">View All Features
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <g clip-path="url(#clip0_601_692)">
                        <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="white"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_601_692">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  {/* <!-- choose-us-block --> */}
                  <div className="choose-us-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="100ms">
                      <div className="icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="60" viewBox="0 0 51 60" fill="none">
                        <g clip-path="url(#clip0_24_628)">
                          <path d="M22.9688 52.9676C22.9688 52.732 22.827 52.5195 22.6096 52.4289C20.0682 51.3695 18.2812 48.8627 18.2812 45.9375V23.4375C18.2812 20.5123 20.0682 18.0054 22.6096 16.9461C22.827 16.8555 22.9688 16.6429 22.9688 16.4074V16.4062H18.2812C14.398 16.4062 11.25 19.5543 11.25 23.4375V45.9375C11.25 49.8207 14.398 52.9688 18.2812 52.9688H22.9688V52.9676Z" fill="#EEF1FB" />
                          <path d="M23.3708 41.3167L36.6292 28.0583" stroke="#FF5CF4" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M30 21.0938L44.0625 2.34375" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M15.9375 2.34375L25.3895 12.9483" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M48.75 30V23.4375C48.75 19.5543 45.602 16.4062 41.7188 16.4062H38.0747C36.4508 13.6159 33.4612 11.7188 30 11.7188C26.5388 11.7188 23.5493 13.6159 21.9253 16.4062H18.2812C14.398 16.4062 11.25 19.5543 11.25 23.4375V45.9375C11.25 49.8207 14.398 52.9688 18.2812 52.9688H21.9253C23.5492 55.7591 26.5388 57.6562 30 57.6562C33.4612 57.6562 36.4507 55.7591 38.0747 52.9688H41.7188C45.602 52.9688 48.75 49.8207 48.75 45.9375V39.375" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_24_628">
                            <rect width="51" height="60" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </div>
                      <div className="content-box">
                        <h6 className="title">Special Financing Offers</h6>
                        <div className="text">Our stress-free finance department that can find financial solutions to save you money.</div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- choose-us-block --> */}
                  <div className="choose-us-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="200ms">
                      <div className="icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M30 2.34375V7.03125" stroke="#FF5CF4" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M48.75 2.34375L44.0625 7.03125" stroke="#FF5CF4" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.4738 36.6607C14.3072 35.4056 13.5938 33.7236 13.5938 31.875C13.5938 30.7464 13.8596 29.68 14.3323 28.7347L19.0198 19.3597C20.1732 17.0529 22.5579 15.4688 25.3125 15.4688H18.2812C15.5266 15.4688 13.142 17.0529 11.9885 19.3597L7.30102 28.7347C6.8284 29.68 6.5625 30.7464 6.5625 31.875C6.5625 33.7236 7.27594 35.4056 8.44254 36.6607L26.5658 56.1592C27.4218 57.0802 28.6436 57.6562 30 57.6562C31.3564 57.6562 32.5782 57.0802 33.4342 56.1593L33.5156 56.0716L15.4738 36.6607Z" fill="#EEF1FB" />
                        <path d="M48.0115 19.3597L52.699 28.7347C53.1716 29.6798 53.4375 30.7464 53.4375 31.875C53.4375 33.7236 52.7241 35.4057 51.5575 36.6608L33.4342 56.1593C32.5782 57.0802 31.3564 57.6562 30 57.6562C28.6436 57.6562 27.4218 57.0802 26.5658 56.1593L8.44254 36.6608C7.27594 35.4057 6.5625 33.7236 6.5625 31.875C6.5625 30.7464 6.8284 29.6798 7.30102 28.7347L11.9885 19.3597C13.142 17.0528 15.5266 15.4688 18.2812 15.4688H41.7188C44.4734 15.4688 46.858 17.0528 48.0115 19.3597Z" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.25 2.34375L15.9375 7.03125" stroke="#FF5CF4" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.3849 29.5312H42.6151" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.3125 24.8438L30 29.5312L34.6875 24.8438" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 43.5938V29.7306" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      </div>
                      <div className="content-box">
                        <h6 className="title">Trusted Car Dealership</h6>
                        <div className="text">Our stress-free finance department that can find financial solutions to save you money.</div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- choose-us-block --> */}
                  <div className="choose-us-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="300ms">
                      <div className="icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <g clip-path="url(#clip0_24_681)">
                          <path d="M8.75576 36.7478L35.3054 10.198C37.136 8.36741 40.104 8.36741 41.9346 10.198L36.8955 5.15894C35.0649 3.32837 32.097 3.32837 30.2664 5.15894L3.71671 31.7087C1.88613 33.5393 1.88613 36.5073 3.71671 38.3378L8.75576 43.3768C6.92518 41.5462 6.92518 38.5783 8.75576 36.7478Z" fill="#EEF1FB" />
                          <path d="M50.1537 18.4171C51.9843 20.2477 51.9843 23.2157 50.1537 25.0463L23.6039 51.5959C21.7734 53.4265 18.8054 53.4265 16.9748 51.5959L3.71671 38.3378C1.88613 36.5072 1.88613 33.5392 3.71671 31.7086L30.2664 5.15894C32.097 3.32836 35.0649 3.32836 36.8955 5.15894L43.5247 11.7881L52.9689 2.34387" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M18.9633 31.0458C18.7631 32.4554 19.2051 33.9388 20.2894 35.0231C22.12 36.8537 25.088 36.8537 26.9186 35.0231C28.7492 33.1926 28.7492 30.2246 26.9186 28.394C25.088 26.5634 25.088 23.5954 26.9186 21.7648C28.7492 19.9342 31.7172 19.9342 33.5478 21.7648C34.6321 22.8491 35.0741 24.3325 34.8739 25.7421" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16.9749 38.3378L20.2894 35.0232" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M33.5476 21.765L36.8621 18.4504" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M43.5938 57.6562L57.6563 43.5937" stroke="#FF5CF4" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_24_681">
                            <rect width="60" height="60" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </div>
                      <div className="content-box">
                        <h6 className="title">Transparent Pricing</h6>
                        <div className="text">Our stress-free finance department that can find financial solutions to save you money.</div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- choose-us-block --> */}
                  <div className="choose-us-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="400ms">
                      <div className="icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path d="M23.5465 4.45312C19.8452 4.45312 16.4904 6.63082 14.9836 10.0114L8.88656 23.6906C5.23148 23.9418 2.34375 26.9843 2.34375 30.7031V36.0938C2.34375 39.3298 4.96711 41.9531 8.20312 41.9531H9.80918C9.81785 41.5022 9.82934 41.0514 9.84375 40.6005C9.4623 39.823 9.24727 38.949 9.24727 38.0245L9.14062 33.8672C9.14062 30.7927 9.76617 29.6094 12.0483 29.1497C13.1331 28.9311 14.0413 28.192 14.4858 27.1786L22.0148 10.0114C23.5215 6.63082 26.8764 4.45312 30.5777 4.45312H23.5465Z" fill="#EEF1FB" />
                        <path d="M8.20312 41.9531C4.96711 41.9531 2.34375 39.3298 2.34375 36.0938V30.7031C2.34375 26.9843 5.23148 23.9418 8.88656 23.6906L14.9836 10.0114C16.4903 6.63082 19.8451 4.45312 23.5465 4.45312H34.2217C37.7441 4.45312 40.9692 6.4275 42.5711 9.56461L45.5859 15.4688M57.6562 30.7031C57.6562 26.8199 54.5082 23.6719 50.625 23.6719H18.6328M28.2422 15.4688V4.57031M32.4609 41.9531H27.1873M20.742 37.2656C18.1532 37.2656 16.0545 39.3643 16.0545 41.9531C16.0545 44.5419 18.1532 46.6406 20.742 46.6406C23.3307 46.6406 25.4295 44.5419 25.4295 41.9531C25.4295 39.3643 23.3309 37.2656 20.742 37.2656Z" stroke="#405FF2" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M57.6562 41.6016C57.6562 46.0997 54.0098 49.8047 49.5117 49.8047C45.0136 49.8047 41.3672 46.1583 41.3672 41.6602C41.3672 37.162 45.0722 33.5156 49.5703 33.5156M43.5352 48.1055L36.0938 55.5469" stroke="#FF5CF3" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      </div>
                      <div className="content-box">
                        <h6 className="title">Expert Car Service</h6>
                        <div className="text">Our stress-free finance department that can find financial solutions to save you money.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End why choose us section --> */}

        {/* <!-- Fun Fact Section --> */}
        <section className="boxcar-fun-fact-section-two">
          <div className="large-container">
            <div className="fact-counter wow fadeInUp">
              <div className="row">
                {/* <!-- Counter block Two--> */}
                <div className="counter-block-two col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
                  <div className="inner">
                    <div className="content">
                      <div className="widget-counter"><span className="count-text" data-speed="3000" data-stop="834">0</span>M</div>
                      <h6 className="counter-title">CARS FOR SALE</h6>
                    </div>
                  </div>
                </div>

                {/* <!-- Counter block Two--> */}
                <div className="counter-block-two col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="inner">
                    <div className="content">
                      <div className="widget-counter"><span className="count-text" data-speed="3000" data-stop="732">0</span>M</div>
                      <h6 className="counter-title">DEALER REVIEWS</h6>
                    </div>
                  </div>
                </div>

                {/* <!-- Counter block Two--> */}
                <div className="counter-block-two col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                  <div className="inner">
                    <div className="content">
                      <div className="widget-counter"><span className="count-text" data-speed="3000" data-stop="90">0</span>M</div>
                      <h6 className="counter-title">VISITORS PER DAY</h6>
                    </div>
                  </div>
                </div>

                {/* <!-- Counter block Two--> */}
                <div className="counter-block-two col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                  <div className="inner">
                    <div className="content">
                      <div className="widget-counter"><span className="count-text" data-speed="3000" data-stop="236">0</span>M</div>
                      <h6 className="counter-title">VERIFIED DEALERS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Fun Fact Section--> */}

        {/* <!-- cars-section-ten --> */}
        <section className="cars-section-ten">
          <div className="boxcar-container">
            <div className="boxcar-title wow fadeInUp">
              <h2>Recently Added</h2>
              <a href="#" className="btn-title">View All<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <g clip-path="url(#clip0_601_243)">
                  <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#050B20" />
                </g>
                <defs>
                  <clipPath id="clip0_601_243">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              </a>
            </div>
            <div className="row car-slider-three wow fadeInUp" data-wow-delay="200ms" data-preview="4">
              {/* <!-- car-block-ten --> */}
              <div className="car-block-ten col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/shop8-1.jpg" alt="" /></a></figure>
                    <span>Low Mileage</span>
                    <a href="#" className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_601_1274)">
                          <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_1274">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                    <ul>
                      <li>26,786 kms</li>
                      <li>Petrol</li>
                      <li>Automatic</li>
                    </ul>
                    <div className="btn-box">
                      <small>$399</small>
                      <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_601_4346)">
                          <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_4346">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- car-block-ten --> */}
              <div className="car-block-ten col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/shop5-2.jpg" alt="" /></a></figure>
                    <a href="#" className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_601_1274)">
                          <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_1274">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                    <ul>
                      <li>26,786 kms</li>
                      <li>Petrol</li>
                      <li>Automatic</li>
                    </ul>
                    <div className="btn-box">
                      <small>$399</small>
                      <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_601_4346)">
                          <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_4346">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- car-block-ten --> */}
              <div className="car-block-ten col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box two">
                    <figure className="image"><a href="#"><img src="images/resource/shop5-3.jpg" alt="" /></a></figure>
                    <span>Great Price</span>
                    <a href="#" className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_601_1274)">
                          <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_1274">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                    <ul>
                      <li>26,786 kms</li>
                      <li>Petrol</li>
                      <li>Automatic</li>
                    </ul>
                    <div className="btn-box">
                      <small>$399</small>
                      <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_601_4346)">
                          <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_4346">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- car-block-ten --> */}
              <div className="car-block-ten col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/shop5-4.jpg" alt="" /></a></figure>
                    <a href="#" className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_601_1274)">
                          <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_1274">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                    <ul>
                      <li>26,786 kms</li>
                      <li>Petrol</li>
                      <li>Automatic</li>
                    </ul>
                    <div className="btn-box">
                      <small>$399</small>
                      <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_601_4346)">
                          <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_4346">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- car-block-ten --> */}
              <div className="car-block-ten col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/shop8-1.jpg" alt="" /></a></figure>
                    <span>Low Mileage</span>
                    <a href="#" className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_601_1274)">
                          <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_1274">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                    <ul>
                      <li>26,786 kms</li>
                      <li>Petrol</li>
                      <li>Automatic</li>
                    </ul>
                    <div className="btn-box">
                      <small>$399</small>
                      <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_601_4346)">
                          <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_4346">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- car-block-ten --> */}
              <div className="car-block-ten col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/shop5-2.jpg" alt="" /></a></figure>
                    <a href="#" className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_601_1274)">
                          <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_1274">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                    <ul>
                      <li>26,786 kms</li>
                      <li>Petrol</li>
                      <li>Automatic</li>
                    </ul>
                    <div className="btn-box">
                      <small>$399</small>
                      <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_601_4346)">
                          <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_4346">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- car-block-ten --> */}
              <div className="car-block-ten col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box two">
                    <figure className="image"><a href="#"><img src="images/resource/shop5-3.jpg" alt="" /></a></figure>
                    <span>Great Price</span>
                    <a href="#" className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_601_1274)">
                          <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_1274">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                    <ul>
                      <li>26,786 kms</li>
                      <li>Petrol</li>
                      <li>Automatic</li>
                    </ul>
                    <div className="btn-box">
                      <small>$399</small>
                      <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_601_4346)">
                          <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_4346">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- car-block-ten --> */}
              <div className="car-block-ten col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/shop5-4.jpg" alt="" /></a></figure>
                    <a href="#" className="icon-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_601_1274)">
                          <path d="M9.39062 12C9.15156 12 8.91671 11.9312 8.71128 11.8009L6.11794 10.1543C6.04701 10.1091 5.95296 10.1096 5.88256 10.1543L3.28869 11.8009C2.8048 12.1082 2.13755 12.0368 1.72722 11.6454C1.47556 11.4047 1.33685 11.079 1.33685 10.728V1.2704C1.33738 0.570053 1.90743 0 2.60778 0H9.39272C10.0931 0 10.6631 0.570053 10.6631 1.2704V10.728C10.6631 11.4294 10.0925 12 9.39062 12ZM6.00025 9.06935C6.24193 9.06935 6.47783 9.13765 6.68169 9.26743L9.27503 10.9135C9.31233 10.9371 9.35069 10.9487 9.39114 10.9487C9.48046 10.9487 9.61286 10.8788 9.61286 10.728V1.2704C9.61233 1.14956 9.51356 1.05079 9.39272 1.05079H2.60778C2.48642 1.05079 2.38817 1.14956 2.38817 1.2704V10.728C2.38817 10.7911 2.41023 10.8436 2.45384 10.8851C2.52582 10.9539 2.63563 10.9708 2.72599 10.9135L5.31934 9.2669C5.52267 9.13765 5.75857 9.06935 6.00025 9.06935Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_1274">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div className="content-box">
                    <h6 className="title"><a href="#">Mercedes-Benz, C className</a></h6>
                    <ul>
                      <li>26,786 kms</li>
                      <li>Petrol</li>
                      <li>Automatic</li>
                    </ul>
                    <div className="btn-box">
                      <small>$399</small>
                      <a href="#" className="details">View Details<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g clip-path="url(#clip0_601_4346)">
                          <path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#405FF2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_601_4346">
                            <rect width="14" height="14" fill="white" />
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
        </section>
        {/* <!-- End shop section ten --> */}

        {/* <!-- boxcar-testimonial-section-four --> */}
        <section className="boxcar-testimonial-section-four v8 pt-0">
          <div className="large-container">
            <div className="right-box">
              <div className="boxcar-title light">
                <h2>What our customers say</h2>
                <div className="text">Rated 4.7  / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</div>
              </div>
              <div className="row stories-slider">
                {/* <!-- testimonial-block-four --> */}
                <div className="testimonial-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon"><a href="#"><img src="images/resource/comas.png" alt="" /></a></figure>
                    <h6 className="title">Great Work</h6>
                    <div className="text"> “Amazing design, easy to customize and a design quality
                      superlative account on its cloud platform for
                      the optimized performance. And we didn’t on our original designs.”</div>
                    <div className="auther-info">
                      <figure className="image"><a href="#"><img src="images/resource/test-auther-1.jpg" alt="" /></a></figure>
                      <h6 className="name">Leslie Alexander</h6>
                      <span>Nintendo</span>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonial-block-four --> */}
                <div className="testimonial-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon"><a href="#"><img src="images/resource/comas.png" alt="" /></a></figure>
                    <h6 className="title">Awesome Design</h6>
                    <div className="text"> “Amazing design, easy to customize and a design quality
                      superlative account on its cloud platform for
                      the optimized performance. And we didn’t on our original designs.”</div>
                    <div className="auther-info">
                      <figure className="image"><a href="#"><img src="images/resource/test-auther-2.jpg" alt="" /></a></figure>
                      <h6 className="name">Floyd Miles</h6>
                      <span>Bank of America</span>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonial-block-four --> */}
                <div className="testimonial-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon"><a href="#"><img src="images/resource/comas.png" alt="" /></a></figure>
                    <h6 className="title">Perfect Quality</h6>
                    <div className="text"> “Amazing design, easy to customize and a design quality
                      superlative account on its cloud platform for
                      the optimized performance. And we didn’t on our original designs.”</div>
                    <div className="auther-info">
                      <figure className="image"><a href="#"><img src="images/resource/test-auther-3.jpg" alt="" /></a></figure>
                      <h6 className="name">Dianne Russell</h6>
                      <span>Facebook</span>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonial-block-four --> */}
                <div className="testimonial-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon"><a href="#"><img src="images/resource/comas.png" alt="" /></a></figure>
                    <h6 className="title">Great Work</h6>
                    <div className="text"> “Amazing design, easy to customize and a design quality
                      superlative account on its cloud platform for
                      the optimized performance. And we didn’t on our original designs.”</div>
                    <div className="auther-info">
                      <figure className="image"><a href="#"><img src="images/resource/test-auther-1.jpg" alt="" /></a></figure>
                      <h6 className="name">Leslie Alexander</h6>
                      <span>Nintendo</span>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonial-block-four --> */}
                <div className="testimonial-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon"><a href="#"><img src="images/resource/comas.png" alt="" /></a></figure>
                    <h6 className="title">Awesome Design</h6>
                    <div className="text"> “Amazing design, easy to customize and a design quality
                      superlative account on its cloud platform for
                      the optimized performance. And we didn’t on our original designs.”</div>
                    <div className="auther-info">
                      <figure className="image"><a href="#"><img src="images/resource/test-auther-2.jpg" alt="" /></a></figure>
                      <h6 className="name">Floyd Miles</h6>
                      <span>Bank of America</span>
                    </div>
                  </div>
                </div>
                {/* <!-- testimonial-block-four --> */}
                <div className="testimonial-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <figure className="icon"><a href="#"><img src="images/resource/comas.png" alt="" /></a></figure>
                    <h6 className="title">Perfect Quality</h6>
                    <div className="text"> “Amazing design, easy to customize and a design quality
                      superlative account on its cloud platform for
                      the optimized performance. And we didn’t on our original designs.”</div>
                    <div className="auther-info">
                      <figure className="image"><a href="#"><img src="images/resource/test-auther-3.jpg" alt="" /></a></figure>
                      <h6 className="name">Dianne Russell</h6>
                      <span>Facebook</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End boxcar-testimonial-section-four --> */}

        {/* <!-- blog section --> */}
        <section className="blog-section pt-0">
          <div className="boxcar-container">
            <div className="boxcar-title wow fadeInUp">
              <h2>Latest Blog Posts</h2>
            </div>
            <div className="row">
              {/* <!-- blog-block --> */}
              <div className="blog-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/blog-1.jpg" alt="" /></a></figure>
                    <span className="date">news</span>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li>Ali Tufan</li>
                      <li>April 20, 2023</li>
                    </ul>
                    <h6 className="title"><a href="blog-single.html" title="">This Long-Awaited Technology May Finally Change the World</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- blog-block --> */}
              <div className="blog-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-delay="100ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/blog-2.jpg" alt="" /></a></figure>
                    <span className="date">news</span>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li>Ali Tufan</li>
                      <li>April 20, 2023</li>
                    </ul>
                    <h6 className="title"><a href="blog-single.html" title="">This Long-Awaited Technology May Finally Change the World</a></h6>
                  </div>
                </div>
              </div>
              {/* <!-- blog-block --> */}
              <div className="blog-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-delay="200ms">
                  <div className="image-box">
                    <figure className="image"><a href="#"><img src="images/resource/blog-3.jpg" alt="" /></a></figure>
                    <span className="date">news</span>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li>Ali Tufan</li>
                      <li>April 20, 2023</li>
                    </ul>
                    <h6 className="title"><a href="blog-single.html" title="">This Long-Awaited Technology May Finally Change the World</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End blog-section --> */}

        {/* <!-- news letter section --> */}
        <section className="news-letter-section pb-0 pt-0">
          <div className="boxcar-container">
            <div className="row g-0 cus-radius-16">
              {/* <!-- image-column --> */}
              <div className="image-column col-lg-4 col-md-6 col-sm-12">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image"><img src="images/resource/news1-1.png" alt="" /></figure>
                  </div>
                </div>
              </div>
              {/* <!-- content-column --> */}
              <div className="form-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="boxcar-title light">
                    <h2>Subscribe To Our Mailing <br />List And Stay Up To Date</h2>
                    <div className="text">We'll keep you updated with the best new jobs.</div>
                  </div>
                  <div className="subscribe-form wow fadeInUp" data-wow-delay="100ms">
                    <form method="post" action="#">
                      <div className="form-group">
                        <input type="email" name="email" className="email" value="" placeholder="Your email" required="" />
                          <button type="button" className="theme-btn btn-style-one hover-light"><span className="btn-title">subscribe</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End news-letter-section --> */}

        {/* <!-- main footer --> */}
        <footer className="boxcar-footer footer-style-two v8">
          <div className="widgets-section">
            <div className="boxcar-container">
              <div className="row">
                {/* <!-- Footer COlumn --> */}
                <div className="footer-column-two col-lg-9 col-md-6 col-sm-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget wow fadeInUp">
                        <h4 className="widget-title">Useful Links</h4>
                        <div className="widget-content">
                          <ul className="user-links style-two">
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
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget wow fadeInUp" data-wow-delay="100ms">
                        <h4 className="widget-title">Quick Links</h4>
                        <div className="widget-content">
                          <ul className="user-links style-two">
                            <li><a href="#">Get in Touch</a></li>
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Live chat</a></li>
                            <li><a href="#">How it works</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget wow fadeInUp" data-wow-delay="200ms">
                        <h4 className="widget-title">Our Brands</h4>
                        <div className="widget-content">
                          <ul className="user-links style-two">
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
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget wow fadeInUp" data-wow-delay="300ms">
                        <h4 className="widget-title">Vehicles Type</h4>
                        <div className="widget-content">
                          <ul className="user-links style-two">
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
                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget social-widget wow fadeInUp" data-wow-delay="400ms">
                    <h4 className="widget-title">Vehicles Type</h4>
                    <div className="widget-content">
                      <div className="text">
                        Monday - Friday: 09:00AM - 09:00
                        PMSaturday: 09:00AM - 07:00PM
                        Sunday: Closed
                      </div>
                      <div className="social-icons">
                        <h6 className="title">Connect With Us</h6>
                        <ul>
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--  Footer Bottom --> */}
          <div className="footer-bottom">
            <div className="boxcar-container">
              <div className="inner-container">
                <div className="copyright-text wow fadeInUp">© <a href="#" />2024 Boxcars.com. All rights reserved.</div>

                <ul className="footer-nav wow fadeInUp" data-wow-delay="100ms">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Notice</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End boxcar-footer --> */}

      </div>


      <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></div>

      {/* <script src="js/jquery.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/slick-animation.min.js"></script>
      <script src="js/jquery.fancybox.js"></script>
      <script src="js/wow.js"></script>
      <script src="js/appear.js"></script>
      <script src="js/mixitup.js"></script>
      <script src="js/knob.js"></script>
      <script src="js/mmenu.js"></script>
      <script src="js/main.js"></script> */}
    </div>
  );
}

export default App;
