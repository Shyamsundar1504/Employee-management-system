import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-employee-detais',
  templateUrl: './view-employee-detais.component.html',
  styleUrl: './view-employee-detais.component.css'
})
export class ViewEmployeeDetaisComponent {
  id:number=0;
  employee:Employee= new Employee();
constructor( private activatedRoute:ActivatedRoute, private employeeService:EmployeeService ){}
ngOnInit():void{
 this.id=this.activatedRoute.snapshot.params['id'];
this.employeeService.getEmployeeById(this.id).subscribe(data=>{
this.employee=data;
})
}
}
