import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import "../styles/cart.css";
import { Col, Row, Container } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = ({item}) => {
    const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const navigate = useNavigate();

  const handleCheckout  = () => {
    if (cartItems.length === 0 ?  (toast.error("Add some items into cart") && navigate("/shop")) : null);
  }



    return (
      <Helmet title="Cart">
        <CommonSection title="Shopping cart" />
        <section>
          <Container>
            <Row>
              <Col lg="9">
                {cartItems.length === 0 ? (
                  <h2 className="fs-4 text-center">No item added to the cart</h2>
                ) : (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                )}
              </Col>
              <Col lg="3">
                <div>
                <h6 className="d-flex align-items-center justify-content-between">Subtotal
                <span className="fs-4 fw-bold">₹{totalAmount}</span>
                </h6>
              
                </div>
                <p className="fs-6 mt-2">taxes and shipping we will calculate in checkout </p>
                <div>
                <button className="buy__btn w-100"
                onClick={handleCheckout}>
                    <Link to='/checkout'>Checkout</Link>
                  </button>
                  <button className="buy__btn w-100 mt-3">
                    <Link to='/shop'>Continue shopping</Link>
                  </button>
                
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    );
};

const Tr = ({ item }) => {
  const dispatch= useDispatch();
  const deleteProducts=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="b" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <motion.td
        whileTap={{ scale: 1.2 }}
        onClick={deleteProducts}
        class="ri-delete-bin-line"
      ></motion.td>
    </tr>
  );
};

export default Cart;
