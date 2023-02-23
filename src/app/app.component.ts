import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { EmployeeService } from './services/employee.service';

// export const MY_DATE_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY'
//   },
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    // { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
    // { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
export class AppComponent implements OnInit {
  title = 'angular15-crud-app-scss';

  constructor(
    private _dialog: MatDialog, private _empService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent);
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}


