import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiCmaBackEndService } from 'src/app/core/http-services/cma-be/api-cma-back-end.service';
import { IThemes } from 'src/app/shared/interfaces/themes.model';
import { Campaign, CampaignResponse } from 'src/app/shared/models/campaign.model';
import { GameType } from 'src/app/shared/models/game-models/gametype.model';
import { AdminService } from 'src/app/shared/services/admin.service';
import { BaseBackendConstraints } from 'src/environments/environment';

@Component({
  selector: 'app-gt-form',
  templateUrl: './gt-form.component.html'
})

export class GameTypeForm implements OnInit {
  gameTypeForm: FormGroup;

  @Input() gameType: GameType;
  @Input() operation: 'create' | 'update';
  @Output() closeModal = new EventEmitter();
  @Output() formSuccess = new EventEmitter();


  constructor(
    private apiCmaBackEndService: ApiCmaBackEndService,
    private adminService: AdminService
  ){
    this.apiCmaBackEndService.setEndpoint(BaseBackendConstraints.CMA_BE);
    this.gameTypeForm = new FormGroup({
      gameTypeName: new FormControl('',Validators.required),
      gameTypeDescription: new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void{
      console.log(this.gameType);
    if(this.gameType){
      this.gameTypeForm.controls['gameTypeName'].patchValue(this.gameType.gameTypeName);
      this.gameTypeForm.controls['gameTypeDescription'].patchValue(this.gameType.gameTypeDescription);
    }
  }

  buildBody(): GameType {
    return {
      ...this.gameType,
      gameTypeName: this.gameTypeForm.get('gameTypeName')?.value,
      gameTypeDescription: this.gameTypeForm.get('gameTypeDescription')?.value
    }
  }

  closeModalEvent(){
    this.gameTypeForm.reset();
    this.closeModal.emit();
  }

  submitNewGameType(): void{
    console.log('new gametype form submit...');

    if(!this.gameTypeForm.valid){
      console.log('...form not valid');
      return;
    }

    const saveObj: GameType = { ...this.buildBody() };

    let submit$: Observable<GameType>;

    switch(this.operation){
      case 'create':
        submit$ = this.apiCmaBackEndService.postNewGameType(saveObj) as Observable<GameType>;
        break;
      case 'update':
        submit$ = this.apiCmaBackEndService.putGameType(saveObj) as Observable<GameType>;
        break;
    }
    submit$.subscribe({
      next: (_response) => {
        this.finalizeSubmission();
      }
    })
  }

  finalizeSubmission(){
    this.formSuccess.emit();
    this.closeModalEvent();
  };
}
