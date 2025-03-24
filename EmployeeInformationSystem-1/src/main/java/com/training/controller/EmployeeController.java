package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.entity.Employee;
import com.training.services.EmployeeServices;

@CrossOrigin("http://localhost:5173")
@RequestMapping("/employee")
@RestController
public class EmployeeController {

	@Autowired
	EmployeeServices employeeServices;
	
	//Creating values in the database
	@PostMapping("/addEmployee")
	public String createEmpDetail(@RequestBody Employee employee)
	{
		return employeeServices.createEmpDetail(employee);
	}
	
	
	//Reading the values from the database
	@GetMapping("/viewAllEmp")
	public List<Employee> getEmployee()
	{
		List<Employee> listOfEmp=employeeServices.getAllEmployee();
		return listOfEmp;
	}
	
	//Updating the values in the database
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee)
	{
		return employeeServices.updateEMpDetails(id,updatedEmployee);
	}
	
	//Delete the values
	@DeleteMapping("/id/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
	    return employeeServices.deleteEmp(id);
	}
	
	//Get employee by id
	@GetMapping("/getbyid/{id}")
	public ResponseEntity<?> getEmpById(@PathVariable Long id)
	{
		return employeeServices.getById(id);
	}
	
	
}
