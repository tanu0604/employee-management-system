import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../api/employee_api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateEmp = () => {
  const [empId, setEmpId] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const navigate = useNavigate();

  const saveEmployee = async (e) => {
    e.preventDefault();
    const employee = { empId, firstName, lastName, emailId };
    console.log(employee);

    try {
      const response = await createEmployee(employee);
      toast.success("Employee created successfully!");
      console.log(response.data);
      // Redirect after a delay to let the user see the success toast
      setTimeout(() => {
        navigate("/read");
      }, 2000);
    } catch (error) {
      toast.error("Error creating employee!");
      console.error("Error creating employee:", error);
    }
  };

  return (
    <section className="update-section flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border-2 border-gray-300">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Create an Employee
        </h2>
        <form className="flex flex-col space-y-4" onSubmit={saveEmployee}>
          <label className="form-label">EmpId</label>
          <input
            type="text"
            placeholder="Enter Employee ID"
            value={empId}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmpId(e.target.value)}
            required
          />

          <label className="form-label">FirstName</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setFirst(e.target.value)}
            required
          />

          <label className="form-label">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label className="form-label">Email Id</label>
          <input
            type="email"
            placeholder="Enter Email ID"
            value={emailId}
            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmailId(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Create Employee
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateEmp;
