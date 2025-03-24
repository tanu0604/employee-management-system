package com.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.entity.Employee;

//jpa= java persistence api
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
