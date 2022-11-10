import React from 'react'
import "./Home.css"
import Carusel from '../../components/Carusel/Carusel'

export const Home = () => {
    return (
        <div>
            <div>
                <Carusel/>
            </div>
            <div className='About  '
            style={{
                backgroundImage: `url(${"./choco-bg.webp"})`,
                backgroundSize:`contain`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `right top`,
                height:`46em` ,
                padding:`13em 4em 2em 4em `
            }}
            >
                <div className='about-desc '
                style={{
                opacity:`90%`,
                backgroundColor: `white` ,
                display:`flex`,
                flexDirection:`column`,
                justifyContent:`center`,
                fontSize:`1.3em`,
                color:`#663300`,
                fontFamily:` cursive`
                }}
                >
                <h1 className=''>About us</h1>
                <p className=' text-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nesciunt consequuntur et nulla, placeat dolor ducimus unde voluptate ipsa vel velit, nostrum sunt quasi optio! Fuga voluptatum qui nemo culpa ducimus sequi veniam consectetur tenetur, esse quos, ipsa in autem.
                </p>
                <p className='  text-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nesciunt consequuntur et nulla, placeat dolor ducimus unde voluptate ipsa vel velit, nostrum sunt quasi optio! Fuga voluptatum qui nemo culpa ducimus sequi veniam consectetur tenetur, esse quos, ipsa in autem.
                </p>
                </div>
                <div className='banners mt-5 pt-5'>
                    <h2 className='m-5'>Cakes & Sweets</h2>
                    <div className='row'
                    style={{
                        display:`flex`,
                                    justifyContent:`space-between`,
                                    margin:`10px`
                    }}>
                        <div className="col-md-3 pb-2 ">
                            <img src="./img-1.webp"
                                alt="" 
                                style={{
                                    
                                    height:`25em`, 
                                    width:`22em`,
                                    
                                }}
                                />
                            </div>
                            <div className="col-md-3 ">
                            <img src="./img-2.jpg" 
                            alt="" 
                            style={{
                                height:`25em`,
                                width:`22em`,
                                marginLeft:`70px`
                            }}
                            />
                            </div>
                            <div className="col-md-3 ">
                            <img src="./img-3.jpg" 
                            alt="" 
                            style={{
                                height:`25em`,
                                width:`22em`,
                                marginLeft:`140px`
                            }}
                            />
                            </div>
                            
                        <div className="col-md-2"></div>
                    </div>
                    <div className='row'>
                        <div className="col-md-3 ">
                            <img src="./banner01.webp"
                                alt="" 
                                style={{
                                    marginLeft:`1.3em`,
                                    height:`60vh`, 
                                    width:`22em`,
                                    
                                }}
                                />
                            </div>
                            <div className="col-md-3 ">
                            <img src="./banner02.webp" 
                            alt="" 
                            style={{
                                height:`60vh`,
                                width:`45.7em`,
                                marginLeft:`7em`
                            }}
                            />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
