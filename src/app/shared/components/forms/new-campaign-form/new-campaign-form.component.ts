import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    campaignDescription: new FormControl('', Validators.required),
    campaignTags: new FormControl('', Validators.required),
    campaignTheme: new FormControl(1, Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }

  closeModalEvent(){}
  submitNewCampaign(){
    console.log("Hello there!");
  }
}
