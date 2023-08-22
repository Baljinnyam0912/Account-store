import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    heigth: 100vh;
    border: 0.5px solid grey
    display: flex;
    align-items: center;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify:content: center;
    margin: auto;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    paddin-rigth: 10px;
`

const Logos = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 25px;
`
const Img = styled.img`
    width: 100%;
`
const Brands = () => {
  return (
    <Container>
        <Wrapper>
            <h1>SHOP BY BRANDS</h1>
        </Wrapper>
        <Logo>   
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/ak-reels_200x.jpg?v=1614326626"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Alfagomma_200x.jpg?v=1614328843"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Antelco_200x.png?v=1614328844"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Austworld_200x.jpg?v=1614328844"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Banjo_200x.jpg?v=1614328844"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Barfell_2000x.jpg?v=1614328844"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Crusader_Hose_2000x.jpg?v=1614328844"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/products/dixon_2000x.jpg?v=1641195522"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/products/hansen_2000x.jpg?v=1641211922"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/AW-Logo-_Vertical_2000x.png?v=1614325029"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/HR_Products_2000x.png?v=1614328844"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Jamec_2000x.jpg?v=1614328844"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Karcher_2000x.png?v=1614328845"/>
        </Logos>
        <Logos>
            <Img src="https://cdn.shopify.com/s/files/1/0468/6725/1349/files/Lowe_2000x.jpg?v=1614328845"/>
        </Logos>
        {/* <Logos>
            <Img src=""/>
        </Logos>
        <Logos>
            <Img src=""/>
        </Logos>
        <Logos>
            <Img src=""/>
        </Logos>
        <Logos>
            <Img src=""/>
        </Logos>
        <Logos>
            <Img src=""/>
        </Logos>
        <Logos>
            <Img src=""/>
        </Logos> */}
        </Logo> 
</Container>

  )
}

export default Brands