package com.emp.mgmt.reposiotry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emp.mgmt.entity.Employee;

@Repository
public interface EMSRepository extends JpaRepository<Employee, Long> {

}
