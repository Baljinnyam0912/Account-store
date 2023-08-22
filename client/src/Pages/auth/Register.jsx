import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/authSlice";
import { StyledForm } from "./StyledForm";
import { Link } from "react-router-dom";


// const Container = styled.div`
//   width: 100vw;
//   height: 200vh;
//   background: green;
//   flex-direction: column;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   padding: 20px;
//   background-color: red;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    dispatch(registerUser(user));
  }; 
  return (
      <div className=" w-full h-screen bg-black flex flex-row">
     <div className="w-3/6 h-screen bg-[#141416] flex items-center justify-center flex-col ">
     < div className="w-[505px] h-[450px]  small bg-cover bg-no-repeat bg-[url('https://i.postimg.cc/Y0MswC09/5656.png')]"></div>
     <p className="text-white text-2xl mt-3">Аккоунтны аюулгүй худалдаа...</p>
     </div>
     <div className="w-3/6  bg-[#141416] flex items-center justify-center flex-col shadow-sm shadow-black">
     <p className="text-white text-4xl  mb-5">Бүртгүүлэх</p>
     <StyledForm onSubmit={handleSubmit}>
            <input className="w-[300px] h-[40px]  bg-transparent outline-none border-solid border border-inherit rounded-xl text-white text-sm mt-2 hover:border-yellow-500 duration-300"
             onChange={(e) => setUser({ ...user, name: e.target.value })} type="text"  placeholder=" Username / Нэр"/>
            <input className="w-[300px] h-[40px]  bg-transparent outline-none border-solid border border-inherit rounded-xl text-white text-sm mt-2 hover:border-yellow-500 duration-300"
             onChange={(e) => setUser({ ...user, email: e.target.value })} type="text" placeholder=" E-mail / Е-майл" />
            <input className="w-[300px] h-[40px]  bg-transparent outline-none border-solid border border-inherit rounded-xl text-white text-sm mt-2 hover:border-yellow-500 duration-300"
             onChange={(e) => setUser({ ...user, password: e.target.value })} type="password"  placeholder=" Password / Нууц үг" />
              <button className="w-[200px] h-[50px] bg-blue-500 mt-4 text-white cursor-pointer rounded-tr-lg rounded-bl-lg rounded-r-lg ">
            {auth.rigisterStatus === "pending" ? "Submitting..." : "Бүртгүүлэх"}
             </button>
           {auth.registerStatus === "rejected" ? (
           auth.registerError
            ) : null}
            <Link to="/" className="text-white">Нүүр хуудас</Link>
    </StyledForm>
  </div>

  </div>
      
   
    
  
  );
};

export default Register;



    
        // <Form onSubmit={(e)=>handleSubmit(e)}>
        //   <Input placeholder="Хэрэглэгчийн нэр" 
        //   type="username"
        //   onChange={(e) => setUser({ ...user, name :e.target.value})}
        //   />
        //   <Input placeholder="Имайл" 
        //   type="email"
        //   onChange={(e) => setUser({ ...user, email: e.target.value})}
        //   />
        //   <Input placeholder="Нууц үг" 
        //   type="password"
        //   onChange={(e) => setUser({ ...user, password: e.target.value})}
        //   />
        //   <Agreement>
        //     By creating an account, I consent to the processing of my personal
        //     data in accordance with the <b>PRIVACY POLICY</b>
        //   </Agreement>
        //   <button>
        //   {auth.rigisterStatus === "pending" ? "Submitting..." : "Register"}
        // </button>
        // {auth.registerStatus === "rejected" ? (
        //   <p>{auth.registerError}</p>
        // ) : null} */}
        //   {register ? (
        //   <p className="text-success">You Are Registered Successfully</p>
        // ) : (
        //   <p className="text-danger">You Are Not Registered</p>
        // )}
        // </Form>