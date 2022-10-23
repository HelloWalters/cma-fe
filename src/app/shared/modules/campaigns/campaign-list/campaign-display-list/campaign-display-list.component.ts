import { Component, OnInit } from '@angular/core';
import { CampaignsService } from 'src/app/shared/services/campaigns.service';

@Component({
  providers: [CampaignsService],
  selector: 'app-campaign-display-list',
  templateUrl: './campaign-display-list.component.html',
  styleUrls: ['./campaign-display-list.component.scss']
})
export class CampaignDisplayListComponent implements OnInit {

  isloading$ = this.campaignService.isloading$;
  listData$ = this.campaignService.campaignList$;
  constructor(private campaignService: CampaignsService) { }

  ngOnInit(): void {
  }

}
