import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import "../styles/checkout.css";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const  totalQty=useSelector(state=>state.cart.totalQuantity)
  const  totalAmount=useSelector(state=>state.cart.totalAmount)
  const navigate = useNavigate();
const dispatch = useDispatch();

  const handleOrder  = () => {
    toast.success("order placed successfully")
    setTimeout(() => {
      dispatch(cartActions.resetCart());
      navigate("/");
    }, 2000);
  }
  return (
    <Helmet title="Chekout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="phone number" required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="street address" required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="city" required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="postal code" required/>
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="country" required/>
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal:<span>₹{totalAmount}</span>
                </h6>
                <h6>
                  <span>
                  Shipping:
                  <br />
                  Free shipping</span><span>₹0</span>
                </h6>

                <h4>
                  Total Cost:<span>₹{totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100" onClick={handleOrder}>Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
