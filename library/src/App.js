// // import React, { Component } from "react";
// // import './App.css'
// // import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
// // import { ClassC } from "./ClassComp/ClassC";
// // import ArrayDestructing from "./Components/ArrayDestructing";
// // import ClassComponent from "./Components/ClassComponent";
// // import Greet from "./Components/Greet";
// // import Increase from "./Components/Increase";
// // import Welcome from "./Components/Welcome";
// // import HomePage from "./HomePage";
// // import demo from './demo';
// // import DisplayEmployee from './React-Rest/displayEmployee';
// // import BootstrapCarouselDemo from "./BootstrapCarouselDemo";
// // import AlertsDemo from "./AlertsDemo";
// // import Login from "./Login";
// // import CollapseDemo from "./CollapseDemo";
// // import CardImage from "./CardImage";
// // import DeleteUser from "./React-Rest/DeleteUser";
// // import CreateUser from "./React-Rest/CreateUser";
// //  import UserPage from "./React-Rest/UserPage"; 



// // class App extends Component{
// //   render(){
// //     const day=20;
// //     return(
// //       <div className="App">

// //       <AlertsDemo></AlertsDemo> 


// //   <HomePage></HomePage>


// //         <ClassC name="foodies " Day={day}
// //         functionValue={()=>[]}
// //         Order={()=>["10years agreement","safePolicy","100% guarranty","Terms and","Conditions"]}
// //         Food={()=><h1>Protect Your family</h1>}/> 

// //  <BootstrapCarouselDemo></BootstrapCarouselDemo>

// //  <CollapseDemo></CollapseDemo>
// //       <ArrayDestructing></ArrayDestructing>
// //       <ClassComponent></ClassComponent>


// //       {/* <NavBar></NavBar>
// //       <h1>WELCOME TO IMACULATE LIBRARY BOOK</h1>
// //       <img variant="top" src="https://image.shutterstock.com/image-photo/laptop-book-lying-on-desk-600w-83045623.jpg" width="1000rem"/> */}
// //       </div>
// //     )
// //   }
// // }

// // export default App;
// // // import './App.css';
// // // import 'bootstrap/dist/css/bootstrap.css';
// // // import DisplayEmployee from './React-Rest/displayEmployee';
// // // import DeleteUser from './React-Rest/DeleteUser';
// // // import HomePage from "./HomePage";

// // // function App() {

// // //   return (
// // // <div className="App">
// // // <div className="header">


// // //   <h1>REST-REACT</h1>
// // //   </div>
// // //   
// // //     <DisplayEmployee />
// // //     <DeleteUser />


// // //     </div>
// // //   )}
// // //   export default App;
// import './App.css';
// import DateChecker from "./Component/DataChecker";

// function App() {
//   return (
//     <div className="App">
//      <DataChecker />
//     </div>
//   );
// }

// export default App;



import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserBooks from './Library/UserBooks';
import Cart from './Cart';
import CreateUser from './Library/CreateUser';
import UserPage from './Library/UserPage';
import RegisterPage from './Library/RegisterPage';
import AlertsDemo from "./AlertsDemo";
import { Nav, Navbar, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
import CollapseDemo from "./CollapseDemo";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import Navi from './Library/Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClassComponent from "./Components/ClassComponent";
import CardImage from "./CardImage";

function App() {

    return ( <
        div className = "Task" >
        <
        div className = "header" >


        <
        AlertsDemo > < /AlertsDemo>  <
        h1 style = {
            { color: 'red' } } > LIBRARY MANAGEMENT SYSTEM < /h1> <
        Router >
        <
        Navi / >
        <
        Switch >
        <
        Route path = "/userpage"
        component = { UserPage }
        /> <
        Route path = "/userbooks"
        component = { UserBooks }
        /> <
        Route path = "/createuser"
        component = { CreateUser }
        /> <
        Route path = "/registerpage"
        component = { RegisterPage }
        /> <
        Route path = "/Cart"
        component = { Cart }
        exact = { true }
        /> <
        /Switch> <
        /Router>



        <
        div className = "bg" >
        <
        div class = "main_content" >

        <
        div class = "info" >
        <
        div className = "lib" > A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community
        for reference or borrowing, often in a quiet environment conducive to study.dolor sit, amet consectetur adipisicing elit.A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro.A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community
        for reference or borrowing.A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community
        for reference or borrowing, often in a quiet environment conducive to study. < /div> { /* <DisplayEmployees /> */ } <
        CollapseDemo > < /CollapseDemo> <
        Carousel >
        <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://image.shutterstock.com/image-photo/books-new-modern-library-stuttgart-600w-674867536.jpg"
        alt = "First slide"
        width = { 600 }
        height = { 400 }
        /> <
        Carousel.Caption >
        <
        h3 > ANNA LIBRARY < /h3> <
        p > CHENNAI < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbcmx1IoRt3q3NeW3_d-Mz1DZLpAmrot6aA&usqp=CAU"
        alt = "Third slide"
        width = { 600 }
        height = { 400 }
        />

        <
        Carousel.Caption >
        <
        h3 > NATIONAL LIBRARY < /h3> <
        p > BANGALORE < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item >
        <
        img className = "d-block w-100"
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbcmx1IoRt3q3NeW3_d-Mz1DZLpAmrot6aA&usqp=CAU"
        alt = "Third slide"
        width = { 600 }
        height = { 400 }
        />

        <
        Carousel.Caption >
        <
        h3 > CENTRAL LIBRARY < /h3> <
        p > NOIDA < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        /Carousel> <
        /div> <
        CardImage > < /CardImage> <
        ClassComponent > < /ClassComponent>

        <
        /div>

        <
        /div> <
        /div>

        <
        /div>
    )
}
export default App;