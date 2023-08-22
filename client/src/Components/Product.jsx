import styled from "styled-components";
import { Link } from "react-router-dom";

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  width: 30%;
  height: 30%;
  line-height: 1;
  color: rgb(42, 42, 42);
  background-color: rgb(255, 255, 255);
`;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(228, 228, 228);
  &:hover{
    cursor: pointer;
  }
  &:hover ${Circle}{
    transform: scalex(1.1);
  }
`


const Info = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const Image = styled.img`
  display: flex; 
  width: 70%;
  overflow: hidden;
  display: inline-block;
  background-color: rgb(255, 255, 255);
  transition: all 200ms ease-in-out 0s;
  position: relative;
`;

const Icon = styled.div`
  min-heigth: 68px;
  padding: 8px 10px;
  font-weigth: 700;
  font-size: 24px;
`;

const Product = ({ item }) => {

  // const {items} = useSelector((state) => state.products)
  return (
    <Container>
      <Wrapper>
      <Link to={`/product/${item._id}`} key={item.id} style={{color: 'inherit', textDecoration: 'none'}}>
        <Circle>
          <Image src={item.img} />
        </Circle>
        <Info style={{textDecoration: 'none'}}>
          <Icon>
            {item.title}
          </Icon>
          <Icon>
            {item.price}₮
          </Icon>
        </Info>
      </Link>
      </Wrapper>
    </Container>
  );
};

export default Product;
