import React from 'react'

function Fleet() {
    return (
        <>
            {/* <!-- cars-section --> */}
            <section class="cars-section">
                <div class="boxcar-container">
                    <div class="boxcar-title wow fadeInUp">  
                        <h2>Fleet</h2> 
                        <a href="#" class="btn-title">View More<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewbox="0 0 14 14" fill="none"><g clip-path="url(#clip0_601_3199)"><path d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z" fill="#050B20"></path></g><defs><clippath id="clip0_601_3199"><rect width="14" height="14" fill="white"></rect></clippath></defs></svg></a>
                    </div>
                    <ul class="nav nav-tabs wow fadeInUp" data-wow-delay="100ms" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">New Cars For Sale</button>
                        </li>
                        <li class="nav-item" role="presentation">  
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Used Cars For Sale</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Browse By Type</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Browse By Brand</button>
                        </li>
                    </ul> 
                    <div class="tab-content wow fadeInUp" data-wow-delay="200ms" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="shop-cars">
                                <ul class="cars-list"> 
                                    <li><a href="#">Used Abarth Cars</a></li>
                                    <li><a href="#">Used Alfa Romeo Cars</a></li>
                                    <li><a href="#">Used Audi Cars</a></li>  
                                    <li><a href="#">Used Bentley Cars</a></li>
                                    <li><a href="#">Used BMW Cars</a></li>
                                    <li><a href="#">Used Chevrolet Cars</a></li>
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Chrysler Cars</a></li>
                                    <li><a href="#">Used Citroen Cars</a></li>
                                    <li><a href="#">Used Cupra Cars</a></li> 
                                    <li><a href="#">Used Dacia Cars</a></li>
                                    <li><a href="#">Used DS Cars</a></li>
                                    <li><a href="#">Used Fiat Cars</a></li>
                                </ul> 
                                <ul class="cars-list">
                                    <li><a href="#">Used Ford Cars</a></li>
                                    <li><a href="#">Used Honda Cars</a></li>
                                    <li><a href="#">Used Hyundai Cars</a></li>
                                    <li><a href="#">Used Infiniti Cars</a></li>
                                    <li><a href="#">Used Jaguar Cars</a></li>
                                    <li><a href="#">Used Jeep Cars</a></li>
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Kia Cars</a></li>
                                    <li><a href="#">Used Land Rover Cars</a></li> 
                                    <li><a href="#">Used Lexus Cars</a></li> 
                                    <li><a href="#">Used Mazda Cars</a></li>
                                    <li><a href="#">Used Mercedes-Benz Cars</a></li>
                                    <li><a href="#">Used MG Cars</a></li>
                                </ul> 
                                <ul class="cars-list">
                                    <li><a href="#">Used Mini Cars</a></li>
                                    <li><a href="#">Used Mitsubishi Cars</a></li> 
                                    <li><a href="#">Used Nissan Cars</a></li> 
                                    <li><a href="#">Used Peugeot Cars</a></li> 
                                    <li><a href="#">Used Porsche Cars</a></li> 
                                    <li><a href="#">Used Renault Cars</a></li>
                                </ul> 
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="shop-cars">
                                <ul class="cars-list">
                                    <li><a href="#">Used Abarth Cars</a></li>
                                    <li><a href="#">Used Alfa Romeo Cars</a></li> 
                                    <li><a href="#">Used Audi Cars</a></li>  
                                    <li><a href="#">Used Bentley Cars</a></li> 
                                    <li><a href="#">Used BMW Cars</a></li>
                                    <li><a href="#">Used Chevrolet Cars</a></li>  
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Chrysler Cars</a></li>
                                    <li><a href="#">Used Citroen Cars</a></li>
                                    <li><a href="#">Used Cupra Cars</a></li> 
                                    <li><a href="#">Used Dacia Cars</a></li>  
                                    <li><a href="#">Used DS Cars</a></li>
                                    <li><a href="#">Used Fiat Cars</a></li> 
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Ford Cars</a></li>
                                    <li><a href="#">Used Honda Cars</a></li>
                                    <li><a href="#">Used Hyundai Cars</a></li>
                                    <li><a href="#">Used Infiniti Cars</a></li> 
                                    <li><a href="#">Used Jaguar Cars</a></li>
                                    <li><a href="#">Used Jeep Cars</a></li>
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Kia Cars</a></li>
                                    <li><a href="#">Used Land Rover Cars</a></li> 
                                    <li><a href="#">Used Lexus Cars</a></li>
                                    <li><a href="#">Used Mazda Cars</a></li>
                                    <li><a href="#">Used Mercedes-Benz Cars</a></li>
                                    <li><a href="#">Used MG Cars</a></li>
                                </ul>
                                <ul class="cars-list"> 
                                    <li><a href="#">Used Mini Cars</a></li>
                                    <li><a href="#">Used Mitsubishi Cars</a></li>
                                    <li><a href="#">Used Nissan Cars</a></li> 
                                    <li><a href="#">Used Peugeot Cars</a></li> 
                                    <li><a href="#">Used Porsche Cars</a></li>
                                    <li><a href="#">Used Renault Cars</a></li>  
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> 
                            <div class="shop-cars">
                                <ul class="cars-list">
                                    <li><a href="#">Used Abarth Cars</a></li>
                                    <li><a href="#">Used Alfa Romeo Cars</a></li>
                                    <li><a href="#">Used Audi Cars</a></li>
                                    <li><a href="#">Used Bentley Cars</a></li>
                                    <li><a href="#">Used BMW Cars</a></li>
                                    <li><a href="#">Used Chevrolet Cars</a></li>
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Chrysler Cars</a></li>
                                    <li><a href="#">Used Citroen Cars</a></li>
                                    <li><a href="#">Used Cupra Cars</a></li>
                                    <li><a href="#">Used Dacia Cars</a></li>
                                    <li><a href="#">Used DS Cars</a></li> 
                                    <li><a href="#">Used Fiat Cars</a></li> 
                                </ul>
                                <ul class="cars-list"> 
                                    <li><a href="#">Used Ford Cars</a></li>  
                                    <li><a href="#">Used Honda Cars</a></li> 
                                    <li><a href="#">Used Hyundai Cars</a></li>  
                                    <li><a href="#">Used Infiniti Cars</a></li> 
                                    <li><a href="#">Used Jaguar Cars</a></li>  
                                    <li><a href="#">Used Jeep Cars</a></li>  
                                </ul>
                                <ul class="cars-list"> 
                                    <li><a href="#">Used Kia Cars</a></li>
                                    <li><a href="#">Used Land Rover Cars</a></li>  
                                    <li><a href="#">Used Lexus Cars</a></li>   
                                    <li><a href="#">Used Mazda Cars</a></li> 
                                    <li><a href="#">Used Mercedes-Benz Cars</a></li>  
                                    <li><a href="#">Used MG Cars</a></li>    
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Mini Cars</a></li>
                                    <li><a href="#">Used Mitsubishi Cars</a></li>   
                                    <li><a href="#">Used Nissan Cars</a></li>
                                    <li><a href="#">Used Peugeot Cars</a></li>
                                    <li><a href="#">Used Porsche Cars</a></li> 
                                    <li><a href="#">Used Renault Cars</a></li> 
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="shop-cars">
                                <ul class="cars-list">
                                    <li><a href="#">Used Abarth Cars</a></li>
                                    <li><a href="#">Used Alfa Romeo Cars</a></li> 
                                    <li><a href="#">Used Audi Cars</a></li>
                                    <li><a href="#">Used Bentley Cars</a></li>  
                                    <li><a href="#">Used BMW Cars</a></li>
                                    <li><a href="#">Used Chevrolet Cars</a></li>
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Chrysler Cars</a></li>
                                    <li><a href="#">Used Citroen Cars</a></li>
                                    <li><a href="#">Used Cupra Cars</a></li>
                                    <li><a href="#">Used Dacia Cars</a></li>
                                    <li><a href="#">Used DS Cars</a></li>
                                    <li><a href="#">Used Fiat Cars</a></li>
                                </ul>
                                <ul class="cars-list"> 
                                    <li><a href="#">Used Ford Cars</a></li>
                                    <li><a href="#">Used Honda Cars</a></li> 
                                    <li><a href="#">Used Hyundai Cars</a></li> 
                                    <li><a href="#">Used Infiniti Cars</a></li>
                                    <li><a href="#">Used Jaguar Cars</a></li>
                                    <li><a href="#">Used Jeep Cars</a></li>
                                </ul>
                                <ul class="cars-list">
                                    <li><a href="#">Used Kia Cars</a></li>
                                    <li><a href="#">Used Land Rover Cars</a></li>
                                    <li><a href="#">Used Lexus Cars</a></li>
                                    <li><a href="#">Used Mazda Cars</a></li>
                                    <li><a href="#">Used Mercedes-Benz Cars</a></li>
                                    <li><a href="#">Used MG Cars</a></li>
                                </ul>
                                <ul class="cars-list"> 
                                    <li><a href="#">Used Mini Cars</a></li>
                                    <li><a href="#">Used Mitsubishi Cars</a></li>
                                    <li><a href="#">Used Nissan Cars</a></li>
                                    <li><a href="#">Used Peugeot Cars</a></li>
                                    <li><a href="#">Used Porsche Cars</a></li>
                                    <li><a href="#">Used Renault Cars</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End shop section --> */}
        </>
    )
}

export default Fleet