import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./addStudent.css";
import { Link } from "react-router-dom";

export const addStudent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [collegename, setCollegename] = useState("");
  const [rollnumber, setRollnumber] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  function handlePhoto(e) {
    console.log(e);
    const readImage = new FileReader();
    readImage.readAsDataURL(e.target.files[0]);
    readImage.onload = () => {
      console.log(readImage.result);
      setPhoto(readImage.result);
    };
    readImage.onerror = () => {
      console.log("error : ", error);
    };
  }

  const handleSaveStudent = () => {
    const data = {
      firstname,
      lastname,
      collegename, /////////////
      rollnumber,
      photo,
    };

    axios
      .post("http://localhost:5000/addStudent", data)
      .then(() => {
        alert("Student Info saved successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert("Student Info is not saved!!!");
        console.log(error);
      });
  };

  return (
    <div className="mainContainer">
      <Link to="/">
        <button className="homeBtn">Home</button>
      </Link>
      <Link to="/addStudent">
        <button className="addBtn">Add</button>
      </Link>
      <div className="container">
        <form>
          <div className="row">
            <div className="field">
              <label>FirstName</label>
              <input
                type="text"
                value={firstname}
                className="text-input"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="field">
              <label>LastName</label>
              <input
                type="text"
                value={lastname}
                className="text-input"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label>CollegeName</label>
              <input
                type="text"
                value={collegename}
                className="text-input"
                onChange={(e) => setCollegename(e.target.value)}
              />
            </div>
            <div className="field">
              <label>RollNumber</label>
              <input
                type="text"
                value={rollnumber}
                className="text-input"
                onChange={(e) => setRollnumber(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label>Photo</label>
            <input type="file" className="photo-input" onChange={handlePhoto} />
            {photo == "" || photo == null ? (
              <img alt="noimage" />
            ) : (
              <img widht="100px" height="100px" src={photo} alt="default" />
            )}
          </div>
          <div>
            <button onClick={handleSaveStudent}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addStudent;
