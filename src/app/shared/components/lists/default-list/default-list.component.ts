import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.component.html',
  styleUrls: ['./default-list.component.scss']
})
export class DefaultListComponent implements OnInit {

  public itemsData: any[] = [];
  @Input() set dataSource(data: any[]){
    this.setListDataSource(data);
  }
  constructor() { }

  ngOnInit(): void {
  }
  private setListDataSource(data: any[]): void {
    if(data){
      this.itemsData = data;
    }
  }

}
