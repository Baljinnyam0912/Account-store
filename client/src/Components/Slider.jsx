import {Link} from "react-router-dom";
import styled from "styled-components";
import { sliderItems } from "../data";


const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 400px){
    display:none
  }
`;


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  &:hover{
    background-color: #cce6ff;
    color: black;
  }
`;
const Text = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: 
`

const Slider = () => {
  return (
    <>
    <div className="w-full h-[40vh] bg-green-500 flex flex-row">
      <div>
        {sliderItems.map((item) => (
          <div className="w-[100%] h-[40vh] bg-black flex flex-row bg-cover" bg={item.bg} key={item.id}>
            <div>
              <img src={item.img}></img>
            </div>

            <div className="w-[100%] h-[40vh] bg-gradient-to-r from-black to-blue-500 flex items-center flex-col">
              <title className="text-white">{item.title}</title>
              <h1 className="text-white text-5xl mt-[30px] absolute">{item.title}</h1>
              <h2 className="text-white text-3xl mt-[100px]">{item.desc}</h2>
              <Link to={`products/${item.cat}`}>
                <button className="w-[200px] h-[50px] bg-white mt-5"> Дэлгэрэнгүй үзэх</button>
              </Link>
              
            </div> 
          </div>

        ))}
      </div>
    </div>
   
    </>
  );
};
export default Slider;
