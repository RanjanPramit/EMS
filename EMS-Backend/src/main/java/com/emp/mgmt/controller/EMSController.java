package com.emp.mgmt.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.mgmt.entity.Employee;
import com.emp.mgmt.service.EMSService;

@RestController
@RequestMapping("/api/ems")
public class EMSController {
	
	@Autowired
	private EMSService service;
	
	@GetMapping("/text")
	String getText() {
		return "This is the backend Spring boot application for the Employee Management Service";
	}
	
	@GetMapping("/emp")
	public List<Employee> getAllEmployees() {
		return service.getAllEmployees();
	}
	
	@GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id){
        return service.getEmployeeById(id);
    }
	
	@PostMapping
	public Employee createEmployee(@RequestBody Employee emp) {
		return service.createEmployee(emp);
	}
	
	
	
	@PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
		employee.setEmpID(id);
        return service.createEmployee(employee);
    }
	
	@DeleteMapping("/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		service.deleteEmp(id);
	}

}
