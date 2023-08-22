import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PayButton from "../Components/PayButton";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart, decreaseCart, getTotals, clearCart, removeFromCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  @media only screen and (max-width: 400px){
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 400px){
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
  @media only screen and (max-width: 400px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 400px){
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductSize = styled.span``;
const ProductLength = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 400px){
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 400px){
    display:flex;
    align-items: center;
    justify-content: center;
  }
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  height: 60vh;
  @media only screen and (max-width: 400px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SummaryFixed = styled.div`
  position: fixed;
  padding: 20px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  @media only screen and (max-width: 400px){
    display: flex;
    position: relative;
    flex-direction : column;
  }
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  padding: 10px;
  margin :5px;
  border: none;
  border-radius: 5px;
  background-color: #595959;
  color: white;
  cursor: pointer;
  font-weigth: 600;
  // width: 100%;
  outline: none;
  transition: .3s;
  &:hover{
      background-color: white;
      color: black;
      font: bold;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  }

  const handleremoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  }

  const handleClearCart = (product) => {
    dispatch(clearCart())
  }

    return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Таний сагс</Title>
        {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Таний сагс хоосон байна</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span> Буцах</span>
            </Link>
          </div>
        </div>
      ) : (
        <Bottom>
          <Info>
            {cart.cartItems.map((cartItem) => (
              <Product key={cartItem._id}>
                <ProductDetail>
                  <Image src={cartItem.img}/>
                  <Details>
                    <ProductName>
                      <b>Бүтээгдэхүүн:</b> {cartItem.title}
                    </ProductName>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                {/* <ProductAmountContainer>
                Тоо хэмжээ
                  <Button onClick={() => handleDecreaseCart(cartItem)}>  -  </Button>
                      <ProductAmount> {cartItem.cartQuantity}</ProductAmount>
                  <Button onClick={() => handleAddToCart(cartItem)}>+</Button>
                </ProductAmountContainer> */}
                    <Button  onClick={() => handleremoveFromCart(cartItem)}>
                        Устгах
                    </Button>
                  <ProductPrice>
                    {cartItem.price * cartItem.cartQuantity}₮
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryFixed>
            <SummaryTitle>Захилга өгөх</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>НИЙТ ДҮН  :</SummaryItemText>
              <SummaryItemPrice><span>{cart.cartTotalAmount}</span> ₮</SummaryItemPrice>
            </SummaryItem>
            {auth._id ? (
              <PayButton cartItems={cart.cartItems} />
            ) : (
              <Button 
              onClick={() => navigate("/login")}>
                Нэвтэрч орно уу!
              </Button>
            )
            }
              <Button onClick={() => handleClearCart()}> Сагс хоослох </Button>
            <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                    >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                  </svg>
                  <span>Нүүр хуудасруу буцах</span>
                </Link>
              </div>
                      </SummaryFixed>
          </Summary>
        </Bottom>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};


export default Cart;
