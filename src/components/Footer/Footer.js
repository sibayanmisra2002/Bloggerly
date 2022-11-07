import React from 'react'
 import './Footer.css'


 const Footer = () => { 
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4><i class="fa-solid fa-address-card"></i>                                                          About</h4>
                        <ul>
                            <li><a href="#"><i class="fa-sharp fa-solid fa-location-dot"></i>                                      Lorem ipsum dolor, sit amet consectetur .</a></li>
                            <li><a href="#"><i class="fa-sharp fa-solid fa-phone"></i>                                          1234567890</a></li>
                            <li><a href="#"><i class="fa-sharp fa-solid fa-paper-plane"></i>                                     abc@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4><i class="fa-solid fa-blog"></i>                                                                 Latest Blogs</h4>
                        <ul>
                            <li><a href="#"> <li><a href="#"></a>Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li></a></li>
                            <li><a href="#"> <li><a href="#"></a>Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</li></a></li>
                            
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>                                                information</h4>
                        <ul>
                            <li><a href="#"><i class="fa-solid fa-fire"></i>About</a></li>
                            <li><a href="#"><i class="fa-solid fa-fire"></i>Top Bloggers</a></li>
                            <li><a href="#"><i class="fa-solid fa-fire"></i>Login</a></li>
                            <li><a href="#"><i class="fa-solid fa-fire"></i>contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4> Blogs</h4>
                        <div className="content">
                            <div className="box1"><img src="https://blog.marketo.com/content/uploads/2016/06/Get-Your-Blog-On-4-Steps-to-Blogging-Success.jpg" alt="" style={{width:"50px", height:"50px"}} />

                            </div>
                          
                            
                           

                        </div>
                        <div className="social">
                            <a href="#"><span className="fab fa-linkedin"></span></a>
                            <a href="#"><span className="fab fa-instagram"></span></a>
                            <a href="#"><span className="fab fa-facebook"></span></a>
                            <a href="#"><span className="fab fa-twitter"></span></a>
                           

                        </div>
                        
                    </div>
                    
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                       Copyright &copy;{new Date().getFullYear()}All rights reserved.
                    </p>
                </div>
                
            </div>
        
        </footer>
       
    )
}

export default Footer;