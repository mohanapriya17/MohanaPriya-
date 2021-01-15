import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';
const AlertsDemo = (props) => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    return ( <
        >

        {
            /* <Alert color="Success" isOpen={visible} toggle={onDismiss}>  
                                   Worried about Corona virus spreading in India? Buy Health Insurance and get coverage now. View Plans 
                                   </Alert>   */
        }

        <
        div class = "alert alert-success" >
        <
        p > < strong > One Library All of India < /strong> Educational materials available from Primary to Postgraduate levels <
        a href = "/cart"
        class = "alert-link" > View our Postgraduate page < /a>  <button type="button" class="close" data-dismiss="alert">×</button >
        <
        /p></div >
        <
        />  
    );
}

export default AlertsDemo;