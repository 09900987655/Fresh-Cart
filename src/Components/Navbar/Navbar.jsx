import React, { useContext } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/freshcart-logo.svg";
import { UserContext } from "./../../Hooks/UserContext";
import { getCart, useCart } from "../../Hooks/useCart";
export default function Navbar() {
  let { userToken, setUserToken, setUserData } = useContext(UserContext);
  let { data } = useCart("cart", getCart, { enabled: !!localStorage.getItem("userToken") });

  function LogOut() {
    setUserToken(null);
    setUserData(null);
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to={"/home"}>
          <img src={logo} alt="Fresh Cart Logo" />
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mx-auto  mt-2 mt-lg-0">
            {userToken !== null ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/home"}>
                    Home
                  </NavLink>
                </li>
              
                

                <li className="nav-item">
                  <NavLink className="nav-link" to={"/brand"}>
                    Brand
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to={"/category"}>
                    Category
                  </NavLink>
                </li>
              </>
            ) : (
              " "
            )}
          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {userToken !== null ? (
              <>
                <li
                  data-bs-toggle={!userToken ? "modal" : ""}
                  data-bs-target="#exampleModal"
                  className="mx-3"
                >
                  <NavLink to={"cart"}>
                    <i className="fa-solid fa-cart-shopping pt-3 pe-4 cursor-pointer  cartIcon">
                      <span className="  ">{data?.data?.numOfCartItems}</span>
                    </i>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to={"/profile"}>
                    <i className="fa-solid fa-user"></i> Profile
                  </NavLink>
                </li>
              </>
            ) : (
              <>
               <li
                  data-bs-toggle={!userToken ? "modal" : ""}
                  data-bs-target="#exampleModal"
                  className="mx-3"
                >
                  <NavLink to={"cart"}>
                    <i className="fa-solid fa-cart-shopping pt-3 pe-4 cursor-pointer  cartIcon">
                      <span className="  ">{data?.data?.numOfCartItems}</span>
                    </i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"Register"}>
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/"}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <p>Please Login firest ...</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
