import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmpByid, updateEmployee } from "../api/employee_api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateEmp = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [empId, setEmpId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmail] = useState("");

  useEffect(() => {
    if (id) {
      console.log("Fetching employee data for ID:", id);
      getEmpByid(id)
        .then((response) => {
          if (response && response.data) {
            const { empId, firstName, lastName, emailId } = response.data;
            setEmpId(empId);
            setFirstName(firstName);
            setLastName(lastName);
            setEmail(emailId);
          } else {
            throw new Error("Invalid response format");
          }
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
          toast.error("Error fetching employee data!");
        });
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const employeeData = { empId, firstName, lastName, emailId };

    if (id) {
      updateEmployee(employeeData, id)
        .then((response) => {
          toast.success("Employee Details Updated Successfully!!!");
          console.log("Updated successfully:", response.data);
          setTimeout(() => {
            navigate("/read");
          }, 2000);
        })
        .catch((error) => {
          toast.error("Some Error Occurred!!!");
          console.error("Error updating employee:", error);
        });
    }
  };

  return (
    <section className="update-section flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border-2 border-gray-300">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Update Employee Details
        </h2>
        <form className="flex flex-col space-y-4" onSubmit={handleUpdate}>
          <label className="form-label">EmpId</label>
          <input
            type="text"
            value={empId}
            placeholder="Enter Employee Id"
            onChange={(e) => setEmpId(e.target.value)}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="form-label">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="form-label">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="form-label">Email Id</label>
          <input
            type="email"
            placeholder="Enter Email ID"
            value={emailId}
            onChange={(e) => {
              console.log("Email Input Changed:", e.target.value);
              setEmail(e.target.value);
            }}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateEmp;
