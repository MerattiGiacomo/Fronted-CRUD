import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServerResponse } from 'http';
import { DataRestClientService } from '../data-rest-client.service';
import { DataObject, Employee, EMPTY_EMPLOYEE  } from '../types/Employee';

const URL: string = "http://localhost:8080/employees";

@Component({
  selector: 'app-tabella-employee',
  templateUrl: './tabella-employee.component.html',
  styleUrls: ['./tabella-employee.component.css']
})
export class TabellaEmployeeComponent implements OnInit {

  isEditingFormHidden = true;
  isNewFormHidden = true;
  pageNumber: number = 0;
  constructor(private restClient: DataRestClientService) {
    this.reload();
    this.dataSource = new MatTableDataSource(this.data?._embedded.employees)
  }

  ngOnInit(): void {

  }

  data: DataObject | undefined;
  dataSource: MatTableDataSource<Employee>;
  displayColumns: string[] = ["id", "firstName", "lastName", "gender" , "birthDate", "hireDate", "action", "edit"];
  editingEmployee: Employee = EMPTY_EMPLOYEE;

  loadData(url:string, page?: number): void{
    this.restClient.getDataRows(url, page).subscribe(
      ServerResponse => {
        this.pageNumber = ServerResponse.page.number;
        this.data = ServerResponse,
        this.dataSource.data = this.data._embedded.employees
        
        if(this.data._embedded.employees.length == 0)
        {
          this.previousPage();
        }
      }
    )
  }
  deleteRow(elementID: number){
    this.restClient.deleteRow(URL+"/"+elementID).subscribe(
      () => this.reload()
    );
  }

  modifyRow(element: Employee){
    this.editingEmployee = {...element};
    this.isEditingFormHidden = false;
  }

  saveModify(employee: Employee){
    const values = Object.values(employee);

    for (const value of values) {
      if(!value){
        alert("Inserire dei valori");
        return;
      }
    }

    this.restClient.putRow(URL+"/"+employee.id, employee).subscribe(
      () => {
        this.isEditingFormHidden = true;
        this.reload();
      }
    );
  }

  addRow(element: Employee){
    this.editingEmployee = {...element};
  }

  applyAdd(employee: Employee){
    const e: any = employee;
    delete e.id;
    const values = Object.values(e);

    for (const value of values) {
      if(!value){
        alert("Inserire dei valori");
        return;
      }
    }

    this.restClient.postRow(URL, e).subscribe(
      () => {
        this.isNewFormHidden = true;
        this.reload();
      }
    );
  }

  reload(){
    this.loadData(URL, this.pageNumber);
  }

  startPage(){
    this.loadData(URL, 0);
  }

  previousPage(){
    this.loadData(URL, this.pageNumber - 1);
  }

  nextPage(){
    this.loadData(URL, this.pageNumber + 1);
  }

  endPage(){
    this.loadData(this.data!._links.last.href.toString());
  }



}
