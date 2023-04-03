import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServerResponse } from 'http';
import { DataRestClientService } from '../data-rest-client.service';
import { DataObject, Employee  } from '../types/Employee';

@Component({
  selector: 'app-tabella-employee',
  templateUrl: './tabella-employee.component.html',
  styleUrls: ['./tabella-employee.component.css']
})
export class TabellaEmployeeComponent implements OnInit {

  constructor(private restClient: DataRestClientService) {
    this.loadData("http://localhost:8080/employees");
    this.dataSource = new MatTableDataSource(this.data?._embedded.employees)
  }

  ngOnInit(): void {

  }

  data: DataObject | undefined;
  dataSource: MatTableDataSource<Employee>;
  displayColumns: string[] = ["id", "firstName", "lastName", "gender" , "birthDate", "hireDate"];

  loadData(url: string): void{
    this.restClient.getDataRows(url).subscribe(
      ServerResponse => {
        this.data = ServerResponse,
        this.dataSource.data = this.data._embedded.employees
      }
    )
  }

}
