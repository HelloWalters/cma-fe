import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ApiCmaBackEndService } from 'src/app/core/http-services/cma-be/api-cma-back-end.service';
import { Campaign, CampaignResponse } from 'src/app/shared/models/campaign.model';
import { CampaignsService } from 'src/app/shared/services/campaigns.service';
import { BaseBackendConstraints } from 'src/environments/environment';

interface IThemes
 {
  value: number;
  viewValue: string;
 }

@Component({
  selector: 'app-new-campaign-form',
  templateUrl: './new-campaign-form.component.html',
  styleUrls: ['./new-campaign-form.component.scss']
})
export class NewCampaignFormComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  @Output() formSuccess = new EventEmitter();

  themes: IThemes[] = [
    {value: 1, viewValue: 'Default'},
    {value: 2, viewValue: 'Fantasy-Light'},
    {value: 3, viewValue: 'Fantasy-Dark'},
    {value: 4, viewValue: 'Post-Apocalyptic'},
    {value: 0, viewValue: 'None'},
  ];

  formTitle: string = "Create a Campaign";

  newCampaignForm: FormGroup = new FormGroup({
    campaignName: new FormControl('', Validators.required),
    campaignDescription: new FormControl(''),
    campaignTags: new FormControl(''),
    campaignTheme: new FormControl(1, Validators.required),
  })

  constructor(
    private apiCmaBackEndService: ApiCmaBackEndService,
    private campaignService: CampaignsService
  ){
    this.apiCmaBackEndService.setEndpoint(BaseBackendConstraints.CMA_BE);
  }

  ngOnInit(): void {
  }

  buildBody(): Campaign {
    const body: Campaign = {
      active: true,
      name: this.newCampaignForm.get('campaignName')?.value,
      description: this.newCampaignForm.get('campaignDescription')?.value,
      tags: this.newCampaignForm.get('campaignTags')?.value,
      theme: this.newCampaignForm.get('campaignTheme')?.value,
    }
    return body;
  }

  closeModalEvent(){
    console.log("new-campaign form close...");
    this.newCampaignForm.reset();
    this.closeModal.emit();
  }

  submitNewCampaign(){
    console.log("new-campaign form submit...");

    if(!this.newCampaignForm.valid){
      console.log("...form not valid.");
      return;
    }

    const saveObj: Campaign = { ...this.buildBody() };

    let submit$: Observable<CampaignResponse>;

    submit$ = this.apiCmaBackEndService.postNewCampaign(saveObj) as Observable<CampaignResponse>;

    submit$.subscribe({
      error: (err) => {
        console.log(err);
      },
      next: (_response) => {
        this.campaignService.requestSubject.next({
          ...this.campaignService.requestSubject.value
        });
        this.finalizeSubmission();
      },
    })
  }

  finalizeSubmission(){
    this.formSuccess.emit();
    this.closeModalEvent();
  }
}
