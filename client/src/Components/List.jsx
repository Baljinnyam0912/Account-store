import { ArrowDropDownOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.ul`
    display: flex;
    height: 5vh;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 0px 20px;
    list-style: none;
    `
    
    const List = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 5px;
    color: #fff;
    `;
    
  
const AllProducts = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`

const Hoses = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`;

const LayFlat = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`

const CsGo = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`

const MobileLegends = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`
const AirHose = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`

const AirCoupler = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`
const list = () => {
  return (
    <Container>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products">
            <AllProducts>Бүтээгдэхүүнүүд<ArrowDropDownOutlined/></AllProducts>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'red'}} to="/products/Giftcards">
                <Hoses>Giftcards<ArrowDropDownOutlined/></Hoses>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/MobileLegends">
                <MobileLegends>MobileLegends<ArrowDropDownOutlined/></MobileLegends>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/CsGo">
                <CsGo>CSGO<ArrowDropDownOutlined/></CsGo>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/Volarant">
                <LayFlat>Volarant<ArrowDropDownOutlined/></LayFlat>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/LeagueOfLegends">
                <AirHose>LeagueOfLegends<ArrowDropDownOutlined/></AirHose>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/PubgMobile">
                <AirCoupler>PubgMobile<ArrowDropDownOutlined/></AirCoupler>
            </Link>
        </List>

    </Container>
       
  )
}

export default list