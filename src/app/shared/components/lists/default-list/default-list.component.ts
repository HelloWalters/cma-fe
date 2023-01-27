import { Component, Input, OnInit } from '@angular/core';
import { Campaign, CampaignResponse } from 'src/app/shared/models/campaign.model';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.component.html',
  styleUrls: ['./default-list.component.scss']
})
export class DefaultListComponent implements OnInit {

  public itemsData: any[] = [];
  @Input() dataSource: CampaignResponse[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  private setListDataSource(data: any[]): void {
    if(data){
      this.itemsData = data;
    }
  }

}
