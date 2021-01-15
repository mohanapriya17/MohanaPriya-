import React, { Component } from 'react'
import { Jumbotron, Card, CardGroup, CardDeck, CardColumns } from 'react-bootstrap';
import Login from './Login'
import DisplayEmployee from './React-Rest/displayEmployee';
import DeleteUser from './React-Rest/DeleteUser';

class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = { count: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };
    handleClick() {
        this.setState({ count: this.state.count + 1 })
    }

    onClickme = () => {
        this.setState({
            count: this.state.count + 1,

        })
    }
    onClickdecrease = () => {
        this.setState({ count: this.state.count - 1, })
    }
    render() {
        return ( <
            div className = "jumbo" >

            <
            Jumbotron >
            <
            h1 > Post Graduate Books < /h1> <
            h2 > Book Your PG books: { this.state.count } < /h2> <
            /Jumbotron> <
            CardColumns >

            <
            Card style = {
                { width: "20rem" } } >
            <
            Card.Img variant = "top"
            src = "https://tse3.mm.bing.net/th/id/OIP.q-43nrZjQRiZ0_ozbFddqwAAAA?pid=Api&w=189&h=300&rs=1" / >
            <
            Card.Body >
            <
            Card.Title > Life Insurance < /Card.Title> <
            Card.Text >
            Life insurance is a contract between an insurer and an insured.Under a life insurance plan, in exchange
            for a premium, the insurer promises to provide the policy nominee with a pre - decided sum of money upon the death of the policyholder(as per applicable terms and conditions). <
            /Card.Text>


            <
            button className = 'btn btn-warning'
            onClick = { this.onClickme } > Add to Cart < /button><br / > < br / >
            <
            button className = 'btn btn-warning'
            onClick = { this.onClickdecrease } > remove from cart Cart < /button><br / > < br / >
            <
            /Card.Body>


            <
            /Card> <
            Card style = {
                { width: '20rem' } } >
            <
            Card.Img variant = "top"
            src = "https://i.ebayimg.com/images/g/knwAAOSwpCFcgW6~/s-l400.jpg" / >
            <
            Card.Body >
            <
            Card.Title > Travel Insurance < /Card.Title> <
            Card.Text >
            Based out of Gurgaon, Haryana, PolicyBazaar is an insurance broker approved by IRDA of India.We offer an online platform
            for insurance buyers where they can easily compare different insurance policies <
            /Card.Text>


            <
            button className = 'btn btn-warning'
            onClick = { this.onClickme } > Add to Cart < /button><br / > < br / >
            <
            button className = 'btn btn-warning'
            onClick = { this.onClickdecrease } > remove from cart Cart < /button><br / > < br / >
            <
            /Card.Body> <
            /Card> <
            Card style = {
                { width: "20rem" } } >
            <
            Card.Img variant = "top"
            src = "https://tse1.mm.bing.net/th/id/OIP.BmSAWMa7L0MMFTBONmvKpwHaJc?pid=Api&rs=1" / >
            <
            Card.Body >
            <
            Card.Title > General Insurance < /Card.Title> <
            Card.Text >
            Also known as non - life insurance, general insurance is defined as any insurance that that doesn’ t fall in the category of life insurance.As per applicable terms and conditions, it provides pre - decided insurance coverage to the insured in exchange of a specific premium. <
            /Card.Text>


            <
            button className = 'btn btn-warning'
            onClick = { this.onClickme } > Add to Cart < /button><br / > < br / >
            <
            button className = 'btn btn-warning'
            onClick = { this.onClickdecrease } > remove from cart Cart < /button><br / > < br / >
            <
            /Card.Body> <
            /Card> <
            Card style = {
                { width: "20rem" } } >
            <
            Card.Img variant = "top"
            src = "https://i.ebayimg.com/images/g/5MUAAOSwavZe8kLZ/s-l640.jpg" / >
            <
            Card.Body >
            <
            Card.Title > General Insurance < /Card.Title> <
            Card.Text >
            Also known as non - life insurance, general insurance is defined as any insurance that that doesn’ t fall in the category of life insurance.As per applicable terms and conditions, it provides pre - decided insurance coverage to the insured in exchange of a specific premium. <
            /Card.Text> <
            button className = 'btn btn-warning'
            onClick = { this.onClickme } > Add to Cart < /button><br / > < br / >
            <
            button className = 'btn btn-warning'
            onClick = { this.onClickdecrease } > remove from cart Cart < /button><br / > < br / >
            <
            /Card.Body> <
            /Card> <
            Card style = {
                { width: "20rem" } } >
            <
            Card.Img variant = "top"
            src = "https://beginnersewingprojects.com/wp-content/uploads/2020/04/9781465468536.jpg1586777639.jpg" / >
            <
            Card.Body >
            <
            Card.Title > General Insurance < /Card.Title> <
            Card.Text >
            Also known as non - life insurance, general insurance is defined as any insurance that that doesn’ t fall in the category of life insurance.As per applicable terms and conditions, it provides pre - decided insurance coverage to the insured in exchange of a specific premium. <
            /Card.Text> <
            button className = 'btn btn-warning'
            onClick = { this.onClickme } > Add to Cart < /button><br / > < br / >
            <
            button className = 'btn btn-warning'
            onClick = { this.onClickdecrease } > remove from cart Cart < /button><br / > < br / >
            <
            /Card.Body> <
            /Card> <
            Card style = {
                { width: "20rem" } } >
            <
            Card.Img variant = "top"
            src = "https://images-na.ssl-images-amazon.com/images/I/41va6ZQZHgL._SX218_BO1,204,203,200_QL40_ML2_.jpg" / >
            <
            Card.Body >
            <
            Card.Title > General Insurance < /Card.Title> <
            Card.Text >
            Also known as non - life insurance, general insurance is defined as any insurance that that doesn’ t fall in the category of life insurance.As per applicable terms and conditions, it provides pre - decided insurance coverage to the insured in exchange of a specific premium. <
            /Card.Text>


            <
            button className = 'btn btn-warning'
            onClick = { this.onClickme } > Add to Cart < /button><br / > < br / >
            <
            button className = 'btn btn-warning'
            onClick = { this.onClickdecrease } > remove from cart Cart < /button><br / > < br / >
            <
            /Card.Body>



            <
            /Card>

            <
            /CardColumns>


            <
            /div>
        )
    }
}
export default Cart