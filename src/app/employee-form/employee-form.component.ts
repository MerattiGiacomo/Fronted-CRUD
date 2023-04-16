import { Employee, EMPTY_EMPLOYEE } from '../types/Employee';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() isNew = false;
  @Output() submitted = new EventEmitter<Employee>();
  @Output() cancelled = new EventEmitter();
  @Input() employee: Employee = {...EMPTY_EMPLOYEE};

  submit() {
    this.submitted.emit({...this.employee});

    if (this.isNew)
      this.employee = {...EMPTY_EMPLOYEE};
  }

  cancel(){
    this.cancelled.emit();

    if (this.isNew)
      this.employee = {...EMPTY_EMPLOYEE};
  }
}
