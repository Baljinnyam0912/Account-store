import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

const Container = styled.div`
    display : flex;
    width: 100%;
    height: 85vh;
`
const Sidebar = styled.div`
    display: flex;
    color: white;
    width: 20%;
    height: 85vh;
    background-color: #dce9d6;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #000;
`
const Account = styled.div`
    display: flex;
    border: 1px solid green;
`
const Order = styled.div``
const User = styled.div``
const Main = styled.div`
    display:flex;
    width: 90%;
    align-items: center;
    justify-content: center;
`

const UserDashboard = () => {

    const user = useSelector((state) => state.user.currentUser);
  return (
      <>
        <Navbar/>
    <Container>
        <Sidebar>
            <Account>
            { user && 
                <User>
                {user.username}
                </User>                
            }
            </Account>
            <Order>
                zahialgiin tuluv
            </Order>

        </Sidebar>
        <Main>
        zahialga

        </Main>
    </Container>
      </>
  )
}

export default UserDashboard