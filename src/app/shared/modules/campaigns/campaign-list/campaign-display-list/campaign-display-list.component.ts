import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Campaign, CampaignResponse } from 'src/app/shared/models/campaign.model';
import { CampaignsService } from 'src/app/shared/services/campaigns.service';

@Component({
  providers: [CampaignsService],
  selector: 'app-campaign-display-list',
  templateUrl: './campaign-display-list.component.html',
  styleUrls: ['./campaign-display-list.component.scss']
})
export class CampaignDisplayListComponent implements OnInit {

  isloading$ = this.campaignService.isloading$;
  campaignData$: Observable<CampaignResponse[]> = this.campaignService.campaigns$;

  @Output() openCampaign = new EventEmitter<{ row: any; index: string }>();


  constructor(private campaignService: CampaignsService) {
  }

  ngOnInit(): void {
  }

  onOpen(row, index){
    this.openCampaign.emit({row, index});
  }
}
