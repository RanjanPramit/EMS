package com.emp.mgmt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.mgmt.entity.Employee;
import com.emp.mgmt.exception.EmployeeNotFoundException;
import com.emp.mgmt.reposiotry.EMSRepository;

@Service
public class EMSService {
	
	@Autowired
	private EMSRepository repo;

	public List<Employee> getAllEmployees() {
		
		return repo.findAll();
	}

	public Optional<Employee> getEmployeeByID(long empID) {
		// TODO Auto-generated method stub
		return Optional.ofNullable(repo.findById(empID).orElseThrow(()-> new EmployeeNotFoundException(empID)));
	}


	public Optional<Employee> getEmployeeById(Long id) {
		return repo.findById(id);
	}

	public Employee createEmployee(Employee emp) {
		return repo.save(emp);
	}

	public void deleteEmp(Long id) {
		repo.deleteById(id);
		
	}

	

	
	

}
