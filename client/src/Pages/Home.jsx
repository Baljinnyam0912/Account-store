import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Footer from "../Components/Footer"
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import Categories from '../Components/Categories'

// import Brands from '../Components/Brands'
import Addition from '../Components/addition';
import About from '../Components/About';
import AboutT from '../Components/AboutT';
import AboutTh from '../Components/AboutTh'
import CatogoriesTwo from '../Components/CategoriesTwo'

const Container = styled.div`
    width: 100%;
`;

const Home = () => {
  return (
      
    <div>
        <Container>
            <Navbar/>
            <Addition/>
            <CatogoriesTwo/>
            {/* <Categories/> */}
            <About/>
            <AboutT/>
            <Slider/>
            {/* <AboutTh/> */}
            <Footer/>
            {/* <Products/> */}
        </Container>
        
    </div>
  )
}

export default Home