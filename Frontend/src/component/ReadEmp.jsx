import React, { useState, useEffect } from "react";
import { deleteEmployeeById, getEmployeeApi } from "../api/employee_api";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadEmp = () => {
  const [empData, setEmpData] = useState([]);
  const navigate = useNavigate();

  const getdata = async () => {
    try {
      const empdata = await getEmployeeApi();
      setEmpData(empdata.data);
    } catch (error) {
      toast.error("Failed to fetch employees.");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateEmployee = (id) => {
    navigate("/update/" + id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete this employee?")) {
      try {
        await deleteEmployeeById(id);
        toast.success("Employee deleted successfully!");
        getdata(); // Refresh data
      } catch (error) {
        toast.error("Error deleting employee!");
      }
    }
  };

  return (
    <section className="read-section flex justify-center items-center p-4">
      <ToastContainer position="top-center" autoClose={2000} />
      <table className="border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
            <th className="border border-gray-300 px-4 py-2">empId</th>
            <th className="border border-gray-300 px-4 py-2">firstName</th>
            <th className="border border-gray-300 px-4 py-2">lastName</th>
            <th className="border border-gray-300 px-4 py-2">emailId</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((data) => (
            <tr key={data.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{data.empId}</td>
              <td className="border border-gray-300 px-4 py-2">{data.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{data.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{data.emailId}</td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button
                  onClick={() => updateEmployee(data.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(data.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ReadEmp;
