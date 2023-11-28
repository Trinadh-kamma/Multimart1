import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Col, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/Ui/ProductsList";
import products from "../assets/data/products";
import CounterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/Ui/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProduts,setMobileProducts]=useState([])
  const [wirelessProduts,setWirelessProducts]=useState([])
  const [popularProduts,setPopularProducts]=useState([])


  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Products in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  debitis laboriosam. Aut ipsum, corporis sint aspernatur quos
                  quia sit eius modi blanditiis ducimus magnam expedita incidunt
                  quasi! Quod, at quam!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
        </Row>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3"> Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={CounterImg} alt="count" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            
          <Col lg="12" className="text-center mb-5">
            <h2 className="section__title">New Arrivals</h2>
          </Col>
          <ProductsList data={mobileProduts} />
          <ProductsList data={wirelessProduts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
      <Container>
          <Row>
            
          <Col lg="12" className="text-center mb-5">
            <h2 className="section__title">Popular in Category</h2>
          </Col>
          <ProductsList data={popularProduts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
