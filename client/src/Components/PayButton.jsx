import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weigth: 600;
    width: 100%;
    transition: .3s;
    &:hover{
        background-color: white;
        color: black;
    }
`

const PayButton = ({cartItems}) => {
    
    const user = useSelector((state) => state.auth);

    const handleCheckout = () => {


        axios.post("http://localhost:7000/api/stripe/create-checkout-session",{
            cartItems,
            userId: user._id
        }).then((res) => {
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message))
    }

    return ( 
        <>
            <Button onClick={() => handleCheckout()}> Төлбөр төлөх </Button>
        </>
    );
}
 
export default PayButton;