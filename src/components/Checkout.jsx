import React from "react";

class Checkout extends React.Component {

    render() {

        var cart = this.props.booksCart.map(book => {
            return (
                <div className="cart">
                    <h5>•{book}</h5>
                </div>
            )
        })
        return (
            <div>
                <h2><u>Cart:</u></h2>{cart}
                <hr />
                <h3>Your Total:${this.props.total.toFixed(2)}</h3>
                <div className="checkoutButtons">
                    <button type="button" class="btn btn-danger" onClick={this.props.clear}>Empty Cart</button>
                    <button type="button" class="btn btn-success" onClick={this.props.ordered}>Order!</button>
                </div>

            </div>

        )
    }
}

export default Checkout;