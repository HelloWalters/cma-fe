import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-campaign-index',
  templateUrl: './campaign-index.component.html',
})
export class CampaignIndex {
  showNewCampaignForm: boolean = false;
  charSheetBtnTitle: string = "Create character sheet"
  campaign;

  constructor(private router:Router){
    this.campaign = this.router?.getCurrentNavigation().extras.state;
    //Sends the user back to the home page if no campaign is provided
    if(!this.campaign){
      console.log("redirecting to home.");
      this.router.navigateByUrl('/');
    }
  }

  openCreateModal(){
    this.showNewCampaignForm = true;
  }

  closeCreateModal(){
    this.showNewCampaignForm = false;
  }
  createFormSuccess(){
    console.log("character-sheet creation successful.");

    this.closeCreateModal();
  }
}
