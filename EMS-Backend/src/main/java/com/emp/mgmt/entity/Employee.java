package com.emp.mgmt.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "EMP_TBL")
public class Employee {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long empID;
	    private String firstName;
	    private String lastName;
	    private String email;
		public Long getEmpID() {
			return empID;
		}
		public void setEmpID(Long empID) {
			this.empID = empID;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public Employee(Long empID, String firstName, String lastName, String email) {
			super();
			this.empID = empID;
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
		}
		public Employee(Long empID) {
			super();
			this.empID = empID;
		}
		public Employee() {

		}
		
		
	    
	    

}
