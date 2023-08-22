import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../Components/Navbar";
import { clearCart, getTotals } from "../slices/cartSlice";

const Container = styled.div`
  font-family: arial;
  font-size: 24px;
  width: 100%;
  height: 100vh;
  /* Setup */
  position: relative;
  
`

const Wrapper = styled.div`
  width: 50%;
  height: 200px;
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
`
const Text = styled.div`
  

`


const Success = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  return (
      <Container>
        <NavBar/>
        <Wrapper>

        <Text>Таны захиалга биелэлээ
          
        </Text>
          
        <a href="/">
        <button style={{ padding: 10, marginTop: 20 }}>Буцах</button>
      </a>
        </Wrapper>
    </Container>
  );
};

export default Success;



