// Profile.js
import React from "react";
import { useSelector } from "react-redux";
import moment from "moment"; 

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <p>First Name: {user?.firstName}</p>
        <p>Middle Name: {user?.middleName}</p>
        <p>Last Name: {user?.lastName}</p>
        <p>Age: {user?.age}</p>
        <p>Gender: {user?.gender}</p>
        <p>Date of Birth: {moment(user?.birthday).format("YYYY-MM-DD")}</p>
        <p>Blood Type: {user?.bloodType}</p>
        <p>Height: {user?.height} cm</p>
        <p>Weight: {user?.weight} kg</p>
        <p>Address: {user?.address}</p>
        <p>Email: {user?.email}</p>
        <p>Contact Number: {user?.contactNumber}</p>

      </div>
    </div>
  );
};

export default Profile;
