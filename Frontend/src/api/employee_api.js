import axios from "axios";

//Getting all the employee
export const getEmployeeApi = async () => {
  const allempdata = await axios.get(
    "http://localhost:8080/employee/viewAllEmp"
  );
  return allempdata;
};

//Creating an employee
const REST_API_POST_URL = "http://localhost:8080/employee/addEmployee";
export const createEmployee = (employee) =>
  axios.post(REST_API_POST_URL, employee);

//Updating an employee
export const updateEmployee = (employee, id) =>
  axios.put(`http://localhost:8080/employee/update/` + id, employee);

//get an employee by its id
export const getEmpByid = async (id) => {
  return axios.get(`http://localhost:8080/employee/getbyid/${id}`);
};

//deleting an employee
export const deleteEmployeeById=async(id)=>{
  return axios.delete(`http://localhost:8080/employee/id/`+id);
}
