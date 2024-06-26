import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent {
  employee: Employee=new Employee();
  constructor( private employeeService: EmployeeService , private router:Router)  {};
    
    saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      this.goToEmployeeList();
      console.log(data);
     
    });
    }
    goToEmployeeList(){
   this.router.navigate(['/employees'])
    }
onSubmit(){
  this.saveEmployee();
 console.log(this.employee);
 
}
}
