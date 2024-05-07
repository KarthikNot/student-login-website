import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setStudents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mainContainer">
      <Link to="/">
        <button className="homeBtn">Home</button>
      </Link>
      <Link to="/addStudent">
        <button className="addBtn">Add</button>
      </Link>

      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>CollegeName</th>
              <th>RollNumber</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.collegename}</td>
                <td>{student.rollnumber}</td>
                <td>
                  <img src={student.photo} alt="hello" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
