import React, { Component } from 'react'  
import './App.css'
import Carousel from 'react-bootstrap/Carousel' 
export class BootstrapCarouselDemo extends Component {  
        render() {  
                return (  
                        <div className="boost">  
                         <div class='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "20px" }} >  
                          <div class="col-sm-12 btn btn-warning">  
                        <h2>India's best Policy Management System</h2>
                         </div>  
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel interval={600} keyboard={false} pauseOnHover={true}>  
                         <Carousel.Item style={{'height':"400px",'width':"1000px"}}  >  
                         <img style={{'height':"500px"}}  
                         className="d-block w-100"  
                        src={'Images/li.jpeg'}  />  
                           <Carousel.Caption>  
                             <h3 style={{textDecorationColor:'red'}}>100% Privacy Policy</h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"400px",'width':"1000px"}}>  
                                 <img style={{'height':"500px"}}  
                                   className="d-block w-100"  
                                    src={'Images/bg2.jpeg'}    />  
                                       <Carousel.Caption>  
                                   <h3>Safe Policy</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"400px",'width':"1000px"}}>  
                                       <img style={{'height':"500px"}}  
                                        className="d-block w-100"  
                                         src={'Images/protect.jpeg'}   />  
                                        <Carousel.Caption>  
                                          <h3>Protect</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarouselDemo  