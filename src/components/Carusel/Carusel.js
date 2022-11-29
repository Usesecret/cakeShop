import Navbar from "../Navbar/Navbar"
import "./Carusel.css"
function Carusel() {
    
    return (
        <div>
          {/* <div id="carouselExampleIndicators" className="carousel carousel-light slide " data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
  <div className="carousel-inner">
            <div 
                className="carousel-item active it-1"
                
              >
                <div className="carousel-caption ">
                <h5>First slide label</h5>
                <img src="./banner02.webp" alt="" />
                <p>Some representative placeholder content for the first slide.</p>
                <button className="btn btn-outline-light"> View Now</button>
              </div>
            </div>
            <div className="carousel-item it-2">

              <div className="carousel-caption">
              <img src="./slide2-bg.webp" alt="" />

                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
                <button className="btn btn-outline-light"> View Now</button>
              </div>
            </div>
            <div className="carousel-item it-3"
              >
              <div className="carousel-caption">
              <img src="./slide2-bg.webp" alt="" />
                
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
                <button className="btn btn-outline-light"> View Now</button>
              </div>
            </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    
    <div className="carousel-item active " data-bs-interval="10000">
      <img src="./slide2-bg.webp" className="d-block home-carusel w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./bg-1.jpg" className="d-block home-carusel w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./banner02.webp" className="d-block home-carusel w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            {/* <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> 
                        <button className="btn btn-primary">View Now</button>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> 
                        <button className="btn btn-primary">View Now</button>
                  </div>
                </div>
            </div>
             */}
        </div>
    )
}
export default Carusel
