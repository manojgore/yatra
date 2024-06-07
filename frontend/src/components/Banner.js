import React from 'react'

function Banner() {
  return (
    <>
    {/* <!-- BANNER SECTION --> */}
    <section className="boxcar-banner-section-v8">
                    <div className="boxcar-container">
                        <div className="banner-content-v8">
                            <h2 className="wow fadeInUp">Let's Find Your Perfect Car</h2>
                            <div className="banner-v8-form wow fadeInUp" data-wow-delay="200ms">
                                <ul className="form-tabs-list">
                                    <li className="current" data-tab="tab-1">Daily Rental</li>
                                    <li data-tab="tab-2">Montly Subscription</li>
                                </ul>
                                <div className="form-tab-content">
                                    <div className="form-tab-pane current" id="tab-1">
                                        <form>
                                            <div className="form_boxes">
                                                <div className="drop-menu">  
                                                    <label>Location</label>
                                                    <div className="select"> 
                                                        <span>Any Makes</span>
                                                        <i className="fa fa-angle-down"></i>
                                                    </div>
                                                    <input type="hidden" name="gender" />
                                                    <ul className="dropdown" style={{display: "none"}}>
                                                        <li>Audi</li>
                                                        <li>Honda</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="form_boxes">
                                                <div className="drop-menu">
                                                    <label>Pick-Up Date</label> 
                                                    <div className="select">
                                                        <span>Select Date</span>
                                                        <i className="fa fa-angle-down"></i>
                                                    </div>
                                                    <input type="hidden" name="gender" />
                                                    <ul className="dropdown" style={{display: "none"}}>                                    
                                                    </ul>
                                                </div> 
                                            </div>
                                            <div className="form_boxes">
                                                <div className="drop-menu">
                                                    <label>Return Date</label>
                                                    <div className="select">
                                                        <span>Select Date</span>
                                                        <i className="fa fa-angle-down"></i>
                                                    </div>
                                                    <input type="hidden" name="gender" />
                                                    <ul className="dropdown" style={{display: "none"}}>                                                       
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
                                                    <label>Any Makes</label>c
                                                    <div className="select">
                                                        <span>Any Makes</span>
                                                        <i className="fa fa-angle-down"></i> 
                                                    </div>
                                                    <input type="hidden" name="gender" /> 
                                                    <ul className="dropdown" style={{display: "none"}}> 
                                                        <li>Audi</li>
                                                        <li>Honda</li>   
                                                    </ul>c
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
                                                    <ul className="dropdown" style={{display: "none"}}>
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
                                                    <ul className="dropdown" style={{display: "none"}}>
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
    </>
  )
}

export default Banner