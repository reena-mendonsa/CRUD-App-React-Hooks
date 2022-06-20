import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

function EditUser(props) {
  let location = useLocation();
  console.log(location);
  let id = location.state;

  const navigate = useNavigate();

  let [name, setName] = useState();
  JSON.parse(localStorage.getItem("data"))[id].name;

  let [username, setUserName] = useState();
  JSON.parse(localStorage.getItem("data"))[id].username;

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    let obj = { name, username };
    data[id] = obj;
    localStorage.setItem("data", JSON.stringify(data));
    // props.history.push("/");
    navigate(`/`);
  };

  const handleChange = ({ target }) => {
    let { id } = target.dataset;
    if (id === "name") {
      setName(target.value);
    }
    if (id === "username") {
      setUserName(target.value);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <h1>Edit User</h1>
        <input
          value={name}
          type="text"
          placeholder="Enter Name"
          data-id="name"
          onChange={handleChange}
        />
        <input
          value={username}
          type="text"
          placeholder="Enter Username"
          data-id="username"
          onChange={handleChange}
        />
        <button>Update User</button>
      </form>
    </React.Fragment>
  );
}

export default EditUser;
