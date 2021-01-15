import React, { Component } from 'react'

import { Form, Button } from 'react-bootstrap'
import used from './used';
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
class CardImage extends React.Component {
    render() {
        return ( <
            div className = "jumbotron" >
            <
            h1 > COVID - 19 RESEARCH REPOSITORY < /h1> <
            img variant = "top"
            src = "https://image.shutterstock.com/image-photo/business-salesman-agent-protection-policy-600w-605500232.jpg"
            width = "300rem" / >
            <
            p > COVID - 19 Research Resources Repository(Scholarly Publications) These are publications in high quality peer - reviewed journals / conferences collected from publishers ' COVID pages and blogs, indexing pages with COVID, preprint archives, and open search of Web and other collections. Besides papers on biological, medical, and health aspects of COVID-19, papers on COVID-19 induced problems, challenges and opportunities in all facets of life (like Online Learning, Video Conferencing, etc.) are also included.</p> <
            Button type = "submit" >
            <
            Router >
            <
            Link to = '/used'
            className = "btn btn-primary" > View More <
            /Link></Router > < /Button> <
            /div>   
        );
    }
}
export default CardImage;