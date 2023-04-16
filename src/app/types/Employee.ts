export const EMPTY_EMPLOYEE = {
    id: 0,
    birthDate: '',
    gender: '',
    firstName: '',
    hireDate: '',
    lastName: ''
  };

export interface Employee{
    birthDate: string,
    firstName: string,
    gender: string,
    hireDate: string,
    id: number,
    lastName: string
}

export interface Employees {
    employees: Employee[]
}
  
export interface DataObject {
    _embedded: Employees,
    _links: Link,
    page: Page,
}
  
export interface Link {
    first: LinkPart,
    last: LinkPart,
    next: LinkPart,
    prev: LinkPart,
    self: LinkPart,
}
  
export interface LinkPart {
    href: String,
}
  
export interface Page {
    number: number,
    size: number,
    totalElements: number,
    totalPages: number,
}