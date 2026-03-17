import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { UserContext } from "./../../Hooks/UserContext";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

export default function Profile() {
  const { userData, setUserToken, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserToken(null);
    setUserData(null);
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    navigate("/");
  };

  if (!userData) {
    return (
      <div className="profile-container">
        <h2 className="text-center my-5">No user data available</h2>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="container my-5">
        <Helmet>
          <title>My Profile</title>
          <meta name="description" content="User Profile Page" />
        </Helmet>

        <div className="profile-content">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-card">
                <div className="profile-avatar">
                  <i className="fa-solid fa-user"></i>
                </div>
                <h2 className="profile-name">{userData.name}</h2>
                <p className="profile-email">{userData.email}</p>
                <p className="profile-phone">
                  <i className="fa-solid fa-phone"></i> {userData.phone}
                </p>
              </div>
            </div>

            <div className="col-md-8">
              <div className="profile-details">
                <h3 className="fw-bold mb-4">Profile Information</h3>

                <div className="info-group">
                  <label>Full Name</label>
                  <p>{userData.name}</p>
                </div>

                <div className="info-group">
                  <label>Email Address</label>
                  <p>{userData.email}</p>
                </div>

                <div className="info-group">
                  <label>Phone Number</label>
                  <p>{userData.phone}</p>
                </div>

                <div className="info-group">
                  <label>Member Since</label>
                  <p>{new Date(userData.createdAt).toLocaleDateString()}</p>
                </div>

                <div className="info-group">
                  <label>Last Updated</label>
                  <p>{new Date(userData.updatedAt).toLocaleDateString()}</p>
                </div>

                <div className="action-buttons mt-4">
                  <button
                    className="btn btn-danger"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-sign-out-alt"></i> Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
