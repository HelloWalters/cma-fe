import { Component, EventEmitter, Output,  } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCmaBackEndService } from 'src/app/core/http-services/cma-be/api-cma-back-end.service';
import { CampaignsService } from 'src/app/shared/services/campaigns.service';
import { BaseBackendConstraints } from 'src/environments/environment';

@Component({
  selector: 'app-standard-sheet',
  templateUrl: './standard-sheet.component.html',
  styleUrls: ['./standard-sheet.component.scss']
})
export class StandardTableTopForm {

  @Output() closeModal = new EventEmitter();
  @Output() formSuccess = new EventEmitter();

  formTitle: string = "Create a New Character";

  characterDetailsForm: FormGroup = new FormGroup({
    characterName: new FormControl(''),
    characterClass: new FormControl(''),
    characterBackground: new FormControl(''),
    characterAlignment: new FormControl(''),
  });

  characterSkillsForm: FormGroup = new FormGroup({
    strength: new FormControl(''),
    dexterity: new FormControl(''),
    constitution: new FormControl(''),
    intelligence: new FormControl(''),
    wisdom: new FormControl(''),
    charisma: new FormControl(''),
  });

  constructor(
    private apiCmaBackEndService: ApiCmaBackEndService,
    private campaignService: CampaignsService
  ){
    this.apiCmaBackEndService.setEndpoint(BaseBackendConstraints.CMA_BE);
  }

  ngOnInit(): void {
  }

  closeModalEvent(){
    console.log("character-sheet form close...");
    this.closeModal.emit();
  }

  finalizeSubmission(){
    this.formSuccess.emit();
    this.closeModalEvent();
  }
}
