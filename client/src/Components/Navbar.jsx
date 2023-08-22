import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../slices/authSlice";
import { toast } from "react-toastify";


const NavImg = styled.div`
  width: 100%;
  height: 100px;
  background-size: contain;
  background: black;
  position: relative;
`

const NavBar = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  return (
    <>
    <div className="w-full h-[10vh] bg-black flex items-center justify-between">
      <div className="w-[100px] h-[100px] bg-none ml-[50px] flex justify-center items-center">
        <Link to="/">
        <img src="https://i.postimg.cc/QxX4Wpvz/icon.png"></img>
        </Link>
        
      </div>
      {/* <div className="w-[300px] h-[50px] bg-yellow-500 ml-[50px] flex flex-row justify-between items-center">
        <h1>Нэвтрэх</h1>
        <h1>Бүртгүүлэх</h1>
      </div> */}
      {auth._id ? (
        <Links>
          {auth.isAdmin ? (
            <div>
              <Link to="/admin/products"><p>Админ</p></Link>
            </div>
          ) : null}
          <div
            onClick={() => {
              dispatch(logoutUser(null));
              toast.warning("Гарлаа", { position: "bottom-left" });
            }}
          >
            <p>Гарах</p>
          </div>
        </Links>
      ) : (
        <AuthLinks>
          <div className="w-[300px] h-[50px] bg-none mr-[10px] flex flex-row justify-between items-center">
          <Link to="/cart">
        <div className="nav-bag">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
            color="white"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16" color="white">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
          <Link to="/login"><p className="text-white">Нэвтрэх</p></Link>
          <Link to="/register"><p className="text-white">Бүртгүүлэх</p></Link>
          </div>
        </AuthLinks>
      )}
      
      
    </div>



    {/* Temdeglel */}

    
  
    {/* <NavImg>
    <nav className="nav-bar">
      <Link to="/">
        <div className="w-[80px] h-[80px] bg-none">
          <img src="https://scontent.fuln6-2.fna.fbcdn.net/v/t1.15752-9/367402941_1472638096889096_8508090302202915726_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=aSGaux0ReNYAX96Mc7J&_nc_ht=scontent.fuln6-2.fna&oh=03_AdT1fR-spNvjpofKCZSSssHsCBTPSV-r9zgtqjepMeNQBw&oe=6505BCC1"></img>
          
        </div>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
      {auth._id ? (
        <Links>
          {auth.isAdmin ? (
            <div>
              <Link to="/admin/products"><p>Админ</p></Link>
            </div>
          ) : null}
          <div
            onClick={() => {
              dispatch(logoutUser(null));
              toast.warning("Гарлаа", { position: "bottom-left" });
            }}
          >
            <p>Гарах</p>
          </div>
        </Links>
      ) : (
        <AuthLinks>
          <Link to="/login"><p>Нэвтрэх</p></Link>
          <Link to="/register"><p>Бүртгүүлэх</p></Link>
        </AuthLinks>
      )}
    </nav>
    </NavImg> */}
    </>
  );
};


export default NavBar;

const AuthLinks = styled.div`
  a {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Links = styled.div`
  color: white;
  display: flex;

  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
    }
  }
`;




