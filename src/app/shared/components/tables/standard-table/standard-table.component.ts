import {
  AfterViewInit,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StandardTableModel } from 'src/app/shared/models/table-models/standard-table.model';

@Component({
  selector: 'app-standard-table',
  styleUrls: ['./standard-table.component.scss'],
  templateUrl: './standard-table.component.html',
})
export class StandardTable implements OnInit {
  @Input() tableColumns: Array<StandardTableModel> = [];
  @Input() tableData: Array<any> = [];

  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.displayedColumns = this.tableColumns.map((c) => c.prop);
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}
