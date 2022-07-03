const CheckoutSteps = (props) => {
    return (
        <div className="checkout-steps">
            <div className={props.step_1 ? "active" : ""}><p>Sign-in</p></div>
            <div className={props.step_2 ? "active" : ""}><p>Shipping</p></div>
            <div className={props.step_3 ? "active" : ""}><p>Payment</p></div>
            <div className={props.step_4 ? "active" : ""}><p>Place Order</p></div>
        </div>
    )
}

export default CheckoutSteps;