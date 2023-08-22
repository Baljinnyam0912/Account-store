
import styled from "styled-components";
import {Link} from "react-router-dom"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Linkto = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const handleClick = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(loginUser(user));
  };
  return (
    <div className='w-full h-screen bg-[#141416] flex flex-row'>
      <div className="h-screen w-[50%] bg-no-repeat bg-cover flex flex-col items-center justify-center bg-none ">
        <div className="w-[500px] h-[450px] bg-no-repeat  bg-[url('https://i.postimg.cc/Y0MswC09/5656.png')]"></div>
        <p className="text-white text-2xl">Аккоунтны аюулгүй худалдаа...</p>
      </div>
      <div className=" h-screen w-[50%] bg-none flex justify-center items-center flex-col">
       <p className="text-white text-5xl  ">Нэвтрэх</p>
       <input className="w-[300px] h-[40px] border-solid border border-inherit rounded-xl bg-transparent outline-none text-white mt-5 text-xs  hover:border-yellow-500 duration-300"
          onChange={(e) => setUser({ ...user, email: e.target.value})} type="text" placeholder="  @mail.com" />
       <input className="w-[300px] h-[40px] border-solid border border-inherit rounded-xl bg-transparent outline-none text-white mt-3 text-xs  hover:border-yellow-500 duration-300" 
          onChange={(e) => setUser({ ...user, password: e.target.value})} type="password" placeholder="  ####" />
       <button className='w-[200px] h-[50px] bg-blue-500 rounded-tr-lg rounded-bl-lg mt-[20px] text-white ' onClick={handleClick} >Нэвтрэх</button>
      </div>
</div>
  );
};

export default Login;
