import React, { useContext } from "react";
import UserContext from "../Context";
import { Link, useNavigate } from "react-router-dom";
// import EditUser from "./EditUser";

function UserInterface() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const data = JSON.parse(localStorage.getItem("data")) || [];
  return (
    <React.Fragment>
      {data != null &&
        data.map((details, i) => (
          <div>
            <label contentEditable={true}>{details.name}</label>
            <label contentEditable={true}>{details.username}</label>
            <span onClick={() => user.handleDelete(i)}> Delete X</span>

            <button
              className="edit"
              onClick={() => {
                navigate(`/edit/${details.username}`, { state: i });
              }}
            >
              Edit
            </button>
          </div>
        ))}
    </React.Fragment>
  );
}

export default UserInterface;
