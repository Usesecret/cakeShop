import React from 'react'
import "./Home.css"
import Carusel from '../../components/Carusel/Carusel'
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import ModalDialog from '../../components/Modal/ModalDialog'
function Home(){

    
            return (
                <div>
                    <div>
                        <Carusel/>
                    </div>
                    <div className='home-about-section  '
                    
                    >
                        <div className="about-sec-wrapper">
                        <div className='about-desc '>
                        <h1 className='text-center'>About us</h1>
                        <p className=' text-center about-des'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nesciunt consequuntur et nulla, placeat dolor ducimus unde voluptate ipsa vel velit, nostrum sunt quasi optio! Fuga voluptatum qui nemo culpa ducimus sequi veniam consectetur tenetur, esse quos, ipsa in autem.
                        </p>
                        <p className='  text-center'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nesciunt consequuntur et nulla, placeat dolor ducimus unde voluptate ipsa vel velit, nostrum sunt quasi optio! Fuga voluptatum qui nemo culpa ducimus sequi veniam consectetur tenetur, esse quos, ipsa in autem.
                        </p>
                        </div>
                        </div>
                        <div className='banners mt-5 pt-5'>
                            <h2 className='m-5 cake-title'>Cakes & Sweets</h2>
                            <div className='row m-0 p-0 banner-wrapper '>
                                <div className="col-md-3  img-rotate ">
                                <Link to="./products"
                                className='banners-img'
                                >

                                    <img src="./img-1.webp"
                                        className='img-margin1 '
                                        alt=""                                        
                                        />
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-3 img-rotate">
                                    <Link to="./products"
                                    className='banners-img'
                                >
                                    <img src="./img-2.jpg" 
                                        className='img-margin '
                                    alt=""                                    
                                    />
                                        </Link>

                                    </div>
                                    <div className="col-md-3 img-rotate">
                                    <Link to="./products"
                                    className='banners-img'
                                    >
                                        <img src="./img-3.jpg" 
                                        className='img-margin '
                                    alt="" 
                                    />
                                        </Link>
                                    </div>
                                    
                            </div>
                            <div className='row m-0 p-0 banner-wrapper '>
                                <div className="col-md-3  img-rotate ">
                                <Link to="./products"
                                    className='banners-img ds-none'>
                                    <img src="./img-1.webp"
                                        className='img-margin1 '
                                        alt=""                                        
                                        />
                                        </Link>
                                    </div>
                                    <div className="col-md-3 img-rotate">
                                    <Link to="./products"
                                    className='banners-img ds-none'>
                                        <img src="./img-2.jpg" 
                                        className='img-margin '
                                    alt=""                                    
                                    /></Link>
                                    </div>
                                    <div className="col-md-3 img-rotate">
                                    <Link to="./products"
                                        className='banners-img ds-none'>

                                    <img src="./img-3.jpg" 
                                        className='img-margin '
                                    alt="" 
                                    />
                                    </Link>
                                    </div>
                                
                                    
                            </div>
                            
                                    <SimpleSlider/>
                                    <Footer/>
                        </div>
                    </div>

                </div>
            )
        }

export default Home
