// import React from 'react'
// import {Link} from "react-router-dom";
// import styled from 'styled-components'
// import allHoses from '../Icons/allHoses.webp'
// import fitting from '../Icons/Fitting.jpeg'
// import Reel from '../Icons/Reel.webp'

// const Container = styled.div`
//     width: 100%;
//     heigth: 50vh;
//     display: flex;
// `
// const Wrapper = styled.div`
//     width: 100%;

// `
// const Image = styled.img`
//     width: 100%;
// `
// const Info = styled.div`
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     padding: 5px 0
// `
// const Text = styled.h2`
//     position: absolute;
//     top: 70%;
//     color: #fff;
//     z-index: 3;
//     text-align: center;
//     left: 0;
//     right: 0;
//     margin-left: auto;
//     margin-right: auto;
// `
// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
//   border-radius: 5px;
//   &:hover{
//     background-color: #91b452;
//     color: white;
//   }
// `;

// const Banner = () => {
//   return (
//       <Container>
//           <Wrapper>
//               <Info>
//                 <Image src={allHoses}/>
//                 <Text>
//                     <h1>Account</h1>
//                     <Link to = "/products/Giftcards">
//                     <Button>Дэлгэрэнгүй</Button>
//                     </Link>
//                 </Text>
//               </Info>
//               <Info>
//                 <Image src={fitting} />
//                 <Text>
//                     <h1>Account</h1>
//                     <Link to = "/products/MobileLegends">
//                     <Button>Дэлгэрэнгүй</Button>
//                     </Link>
//                 </Text>
//               </Info>
//               <Info>
//                 <Image src={Reel} />
//                 <Text>
//                     <h1>Account</h1>
//                     <Link to = "/products/Reel">
//                     <Button>Дэлгэрэнгүй</Button>
//                     </Link>
//                 </Text>
//               </Info>
//           </Wrapper>
      
//       </Container>
//   )
// }

// export default Banner