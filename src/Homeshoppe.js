
import { Component } from "react";

import camera from './assets/camera.png'
import camera2 from './assets/camera2.png'
import sound from './assets/sound.png'
import sound1 from './assets/sound1.png'
import sound2 from './assets/sound2.png'
import tv from './assets/tv.png'
import tv2 from './assets/tv2.png'
import tv3 from './assets/tv3.png'
import tv4 from './assets/tv4.png'

class Homeshoppe extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="navbar">
                        <a href="#d" className="help">Need Help?</a> <span className="call">call us </span> <span className="number">1-22-3456789</span>

                        <nav className="n">
                            <ul>
                                <li><a href="#a">Register</a></li> <i>|</i>
                                <li><a href="#a">Login</a></li> <i>|</i>
                                <li><a href="#a">Delivery</a></li> <i>|</i>
                                <li><a href="#a">Checklist</a></li> <i>|</i>
                                <li><a href="#a">My Account</a></li>
                            </ul>
                        </nav>

                    </div> <hr></hr>
                    <div className="container">
                        <div>
                            <span className="first">H</span>
                            <span className="second">OME SHOPPE</span>

                            <span className="secondnav">
                                <span>Welcome To Our Online Store!</span>
                                <span className="cart">Cart:</span>0 items(0)-$0.00 <select></select> </span>


                        </div>

                    </div>
                    <div className="new">
                        <ul>
                            <li><a class="active" href="#home">Home</a></li>
                            <li><a href="#news">ABOUT</a></li>
                            <li><a href="#contact">DELIVERY</a></li>
                            <li ><a href="#about">NEWS</a></li>
                            <li ><a href="#about">CONTACT</a></li>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search "></input>
                                <button className="b"><i class="fa fa-search"></i></button>


                            </form>


                        </ul>


                    </div>




                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-4">

                            <div className=" card" >
                                <div class="card-header">
                                    CATEGORIES
  </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
MOBILE PHONE</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
DESKTOP</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
LAPTOP</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
ACCESSORIES</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
SOFTWARE</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
SPORTS&FITTNES</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
FOOTWEAR</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
JWELLARY</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
CLOTHING</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
KITCHEN</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
HEALTHCARE</li>
                                    <li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i>
TOYS ,KIDS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4" >
                            <div className="cc" >
                                <img src={tv} width="500px" alt="tv" ></img>
                            </div>
                        </div>


                        <div className="col-4 sale">
                            <div className="s">
                                <p1 className="clear" >CLEARENCE </p1>
                                <h1>SALE</h1>
                                <p> upto 10% off</p>
                                <h6>get to know more about our memory service loreum issimply</h6>
                                <button className="btn btn-danger">shop now</button>
                            </div>
                        </div>
                    </div>

                </div> <br></br>




                <div className="see">
                    <nav className="navbar navbar-white bg-white">
                        <div className="container-fluid">
                            <span className="navbar-text">
                                <b>  NEW PRODUCTS </b>
                            </span>
                            <span className="seeall">
                                see all products<i class="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                        </div>
                    </nav>
                </div> <br></br>


                <div className="container1">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <img src={tv2} alt="tv2"></img>
                                <div className="leron">LOREM IPSUM IS SIMPLY</div>
                                <div className="down"><hr></hr></div>
                                <span className="price">$620.87</span>
                                <button className="bt">Add to cart</button>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card">
                                <img src={sound} alt="sound"></img>
                                <div className="leron">LOREM IPSUM IS SIMPLY</div>
                                <div className="down"><hr></hr></div>
                                <span className="price">$899.75</span>
                                <button className="bt">Add to cart</button>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={camera} alt="camera"></img>
                                <div className="leron">LOREM IPSUM IS SIMPLY</div>
                                <div className="down"><hr></hr></div>
                                <span className="price">$599.00</span>
                                <button className="bt">Add to cart</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={tv3} alt="tv3"></img>
                                <div className="leron">LOREM IPSUM IS SIMPLY</div>
                                <div className="down"><hr></hr></div>
                                <span className="price">$679.87</span>
                                <button className="bt">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div> <br></br>
                <div className="see">
                    <nav className="navbar navbar-white bg-white">
                        <div className="container-fluid">
                            <span className="navbar-text">
                                <b>  FEATURE PRODUCTS</b>
                            </span>
                            <span className="seeall">
                                see all products<i class="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                        </div>
                    </nav>
                </div> <br></br>

                <div className="container1">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <img src={camera2} alt="camera2"></img>
                                <div className="leron">LOREM IPSUM IS SIMPLY</div>
                                <div className="down"><hr></hr></div>
                                <span className="price">$849.99</span>
                                <button className="bt">Add to cart</button>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card">
                                <img src={sound1} alt="sound1"></img>
                                <div className="leron">LOREM IPSUM IS SIMPLY</div>
                                <div className="down"><hr></hr></div>
                                <span className="price">$599.99</span>
                                <button className="bt">Add to cart</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={tv4} alt="tv4"></img>
                                <div className="leron">LOREM IPSUM IS SIMPLY</div>
                                <div className="down"><hr></hr></div>
                                <span className="price">$799.99</span>
                                <button className="bt">Add to cart</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={sound2} alt="sound2"></img>
                                <div className="leron">LOREM IPSUM IS SIMPLY</div>
                                <div className="down"><hr></hr></div>
                                <span className="price">$899.99</span>
                                <button className="bt">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div> <br></br>






            </div>
        )
    }
}

export default Homeshoppe;