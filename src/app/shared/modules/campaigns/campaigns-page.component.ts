import {Component} from '@angular/core';
import { CampaignsService } from 'src/app/shared/services/campaigns.service';
import { CampaignResponse } from '../../models/campaign.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns-page',
  templateUrl: './campaigns-page.component.html',
  styleUrls: ['./campaigns-page.component.scss']
})
export class CampaignsPage{
  showNewCampaignForm: boolean = false;
  campaignsInfo$: Observable<CampaignResponse[]> = this.campaignService.campaigns$;
  constructor(private campaignService: CampaignsService, private router: Router) {}

  openCreateModal(){
    this.showNewCampaignForm = true;
  }

  closeCreateModal(){
    this.showNewCampaignForm = false;
  }
  createFormSuccess(){
    console.log("new-campaign creation successful.");

    setTimeout(() => {
      this.campaignService.isLoadingSubject.next(true);
    }, 2000)
    this.closeCreateModal();
  }
  openCampaign(event:any){
    // TODO
    // console.log(event);
    this.campaignService.selectedCampaign = event;
    this.router.navigateByUrl('/campaign');

  }
}
