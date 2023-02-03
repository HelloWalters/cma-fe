import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorSelectConfig,
} from '@angular/material/paginator';
import { TableActions } from 'src/app/core/enums/table-actions.enum';
import { MatSort } from '@angular/material/sort';
import { SelectedTableColumns } from 'src/app/shared/models/table-models/selected-table-columns.model';
import {
  CurrentPaginationStatus,
  Pagination,
} from 'src/app/shared/models/table-models/pagination.model';
import { StandardTableModel } from 'src/app/shared/models/table-models/standard-table.model';
import { TableSorting } from 'src/app/shared/models/table-models/table-sorting.model';

@Component({
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  selector: 'app-standard-table',
  styleUrls: ['./standard-table.component.scss'],
  templateUrl: './standard-table.component.html',
})
export class StandardTable implements OnChanges, OnInit {
  // Public variables
  public tableDataSource: MatTableDataSource<any>;
  public displayedColumns: string[];
  public ActionsTable = TableActions;
  public currentPageSize = 15;
  public currentOffset = 0;
  public paginator: MatPaginator;
  public sort: MatSort;
  public selectedColumns: SelectedTableColumns[];

  // Inputs
  @Input() columns: StandardTableModel[];
  @Input() pagination: Pagination;
  @Input() showPagination: boolean = true;
  @Input() isServerSidePagination = false;
  @Input() addColumns = true;
  @Input() rowsSelected = [];
  @Input() rowsEnableToSelect = [];
  @Input() showActionsColumnIcon = true;
  @Input() displayedActions: TableActions[] = [];
  @Input() displayActionsColumn = true;
  @Input() isLoading = false;
  @Input() checkTemplateRendering = false;
  @Input() expandedLabel: { plural: string; singular: string };

  @Input() set dataSource(data: any[]) {
    this.setTableDataSource(data);
  }

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    if (!this.isServerSidePagination) {
      this.sort = ms;
      this.setDataSourceAttributes();
    }
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    if (!this.isServerSidePagination) {
      this.paginator = mp;
      this.setDataSourceAttributes();
    }
  }

  @ViewChild('paginator') paginatorEl: MatPaginator;

  // Output variables
  @Output() selectRowEvent = new EventEmitter<any>();
  @Output() editRowEvent = new EventEmitter<{ index: number; row: any }>();
  @Output() duplicateRowEvent = new EventEmitter<any>();
  @Output() deleteRowEvent = new EventEmitter<any>();
  @Output() changePaginationEvent = new EventEmitter<CurrentPaginationStatus>();
  @Output() sortingEvent = new EventEmitter<TableSorting>();
  @Output() contentChangedEvent = new EventEmitter<any>();
  @Output() contentChanged = new EventEmitter<any>();

  // Private variables
  private rowsData: any[];

  columnsMenuOpen = false;

  paginatorConfig: MatPaginatorSelectConfig = { disableOptionCentering: true };

  constructor() {}

  /**
   * Lifecycle hooks
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columns && changes.columns.currentValue) {
      this.buildDisplayedColumns();
    }
    if (changes.dataSource && changes.dataSource.currentValue) {
      if (!this.isServerSidePagination) {
        this.tableDataSource.paginator = this.matPaginator;
        this.tableDataSource.sort = this.matSort;
      }
    }
  }

  ngOnInit() {
    if (!this.displayedActions && this.displayActionsColumn) {
      this.displayedActions = [
        TableActions.EDIT,
        TableActions.DUPLICATE,
        TableActions.DELETE,
      ];
    }
  }
}
