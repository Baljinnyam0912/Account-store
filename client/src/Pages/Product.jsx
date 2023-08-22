import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
// import {addProduct} from "../Redux/cartRedux";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useNavigate } from "react-router"; 

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterLength = styled.div`
  margin-left: 10px;
  padding: 5px;
  font-family: bold;
  font-size: 1.5rem;
`;

const FilterSize = styled.div`
  margin-left: 10px;
  padding: 5px;
  font-family: bold;
  font-size: 1.5rem;
`;

const FilterStock = styled.div`
  margin-left: 10px;
  padding: 5px;
  font-family: bold;
  font-size: 1.5rem;
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  // const handleQuantity = (type) => {
  //   if (type === "-") {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity + 1);
  //   }
  // };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img}  alt="product"/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> {product.price} ₮</Price>
          <FilterContainer>
            <Filter>
              {/* <FilterTitle>Тоо, Хэмжээ</FilterTitle> */}
                <FilterLength>
                  {product.length}
                </FilterLength>
            </Filter>
            <Filter>
              {/* <FilterTitle>Диаметр</FilterTitle> */}
                <FilterSize>
                  {product.size}
                </FilterSize>
            </Filter>
            <Filter>
              <FilterTitle></FilterTitle>
                <FilterStock>
                  {product.inStock}
                </FilterStock>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              {/* <Remove onClick={() => handleQuantity("-")} /> */}
              {/* <Amount>{quantity}</Amount> */}
              {/* <Add onClick={() => handleQuantity()} /> */}
            </AmountContainer>
            <Button onClick={() => handleAddToCart(product)}>
              Сагсанд нэмэх
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;