import {Component} from '@angular/core';
import { Pagination } from '../../models/table-models/pagination.model';
import { StandardTable } from '../../components/tables/standard-table/standard-table.component';
import { StandardTableModel } from '../../models/table-models/standard-table.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html'
})

export class HomePage {
  public columns: StandardTableModel[] = [
    {
      name: 'name',
      prop: 'petName',
      isDefaultColumns: true,
      isSortable: true
    },
    {
      name: 'colour',
      prop: 'petColour',
      isDefaultColumns: true,
      isSortable: true
    },
    {
      name: 'age',
      prop: 'age',
      isDefaultColumns: true,
      isSortable: true
    }
  ];
  public data = [
    {
      petName: 'Mif',
      petColour: 'black',
      age: 2.5
    },
    {
      petName: 'Pep',
      petColour: 'striped',
      age: 2
    }
  ];
  public pagination: Pagination = {
    count: 10,
    limit: 10,
    offset: 0
  }
}
