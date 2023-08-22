import styled from "styled-components";
import {Link} from "react-router-dom";


// const Info = styled.div`
//   opacity: 0;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   cursor: pointer;
//   transition: all 1s ease;
// `;

// const Container = styled.div`
//   flex: 2;
//   margin: 5px;
//   height: 50vh;
//   position: relative;
//   &:hover{
//     ${Info}{
//       opacity:1;
//     }
//   }
//   @media only screen and (max-width: 400px){
//     display:none
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 5px;
//   object-fit: cover;
//   &:hover{
//     background-color: rgba(0,0,0,0.4)
//   }
//   @media only screen and (max-width: 400px){
//     height: "5vh"
//     width: 30%;
//   }
// `;



// const Title = styled.h1`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   text-shadow: 1px 1px 2px #000000;
//   margin-bottom: 20px;
// `;

// const Button = styled.button`
//     border:none;
//     padding: 10px;
//     background-color: white;
//     color:black;
//     font-weight: 600;
//     curser: pointer;
//     transition: all 0.5s ease;
//     border-radius: 5px;
//     border: 1px solid grey;
//     &:hover{
//       background-color: grey;
//       color: white
//     }
// `;

const CategoryItem = ({ item }) => {
  return (
    <div className="w-[290px] h-[50px] bg-red-500 flex">
      <Link to = {`/products/${item.cat}`}>
        <img className=" bg-cover border-rounded" src={item.img}/>
        <div className="absolute">
          <title className=" "> {item.title} </title>
          <button className="w-[290px] h-[50px]  mt-[5%] bg-[#a2a2a2] text-white">Дэлгэрэнгүй</button>
        </div>
      </Link>
    </div>
    
    // <Container>
    //   <Link to = {`/products/${item.cat}`}>
    //   <Image src={item.img} />
    //   <Info>
    //     <Title>{item.title}</Title>
    //     <Button>Дэлгэрэнгүй</Button>
    //   </Info>
    //   </Link>
    // </Container>
  );
};

export default CategoryItem;
