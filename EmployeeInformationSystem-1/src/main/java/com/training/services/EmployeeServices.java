package com.training.services;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import com.training.entity.Employee;
import com.training.repository.EmployeeRepository;

@Service
public class EmployeeServices {

	@Autowired
	EmployeeRepository employeeRepository;
	
	//creating the details of the employee
	public String createEmpDetail(Employee employee)
	{
		employeeRepository.save(employee);
		return "Employee entered successfully";
	}
	
	
	//Reading the values
	public List<Employee> getAllEmployee()
	{
		return employeeRepository.findAll();
	}
	
	//updating the employee details
	public ResponseEntity<?> updateEMpDetails( Long id,Employee updatedEmployee)
	{
		try
		{
			Optional<Employee> employee=employeeRepository.findById(id);
			if(employee.isPresent())
			{
				Employee emp=employee.get();
				emp.setFirstName(updatedEmployee.getFirstName()!=null? updatedEmployee.getFirstName():emp.getFirstName());
				emp.setLastName(updatedEmployee.getLastName()!=null? updatedEmployee.getLastName():emp.getLastName());
				emp.setEmailId(updatedEmployee.getEmailId()!=null? updatedEmployee.getEmailId():emp.getEmailId());
				emp.setEmpId(updatedEmployee.getEmpId()!=null? updatedEmployee.getEmpId():emp.getEmpId());
				
				
				employeeRepository.save(emp);
				return new ResponseEntity<>("Updated Successfully",HttpStatus.OK);
			}
			
			return new ResponseEntity<>("Not Updated Successfully",HttpStatus.NOT_FOUND);
		}
		catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	
	//Deleting employee details
	public ResponseEntity<?> deleteEmp(@PathVariable Long id)
	{
		try {
			Optional<Employee> empId=employeeRepository.findById(id);
			if(empId.isPresent())
			{
				employeeRepository.delete(empId.get());
				return new ResponseEntity<>("Deleted Successfully",HttpStatus.OK);
			}
			return new ResponseEntity<>("Not Deleted Successfully",HttpStatus.NOT_FOUND);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	
	//Get employee by id
	public ResponseEntity<?> getById(Long id)
	{
		try {
			Optional<Employee> empId=employeeRepository.findById(id);
			if(empId.isPresent())
			{
				Employee emp=empId.get();
				return new ResponseEntity<>(emp,HttpStatus.OK);
			}
			return new ResponseEntity<>("Employee id not found",HttpStatus.NOT_FOUND);
		}
		catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
}
