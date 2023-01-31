import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiCmaBackEndService } from 'src/app/core/http-services/cma-be/api-cma-back-end.service';
import { IThemes } from 'src/app/shared/interfaces/themes.model';
import { Campaign, CampaignResponse } from 'src/app/shared/models/campaign.model';
import { GameRace } from 'src/app/shared/models/game-models/gamerace.model';
import { AdminService } from 'src/app/shared/services/admin.service';
import { BaseBackendConstraints } from 'src/environments/environment';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html'
})

export class GameRaceForm implements OnInit {
  gameRaceForm: FormGroup;

  @Input() gameRace: GameRace;
  @Input() operation: 'create' | 'update';
  @Output() closeModal = new EventEmitter();
  @Output() formSuccess = new EventEmitter();


  constructor(
    private apiCmaBackEndService: ApiCmaBackEndService,
    private adminService: AdminService
  ){
    this.apiCmaBackEndService.setEndpoint(BaseBackendConstraints.CMA_BE);
    this.gameRaceForm = new FormGroup({
      gameRaceName: new FormControl('',Validators.required),
      gameRaceDescription: new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void{
      console.log(this.gameRace);
    if(this.gameRace){
      this.gameRaceForm.controls['gameRaceName'].patchValue(this.gameRace.gameRaceName);
      this.gameRaceForm.controls['gameRaceDescription'].patchValue(this.gameRace.gameRaceDescription);
    }
  }

  buildBody(): GameRace {
    return {
      ...this.gameRace,
      gameRaceName: this.gameRaceForm.get('gameRaceName')?.value,
      gameRaceDescription: this.gameRaceForm.get('gameRaceDescription')?.value
    }
  }

  closeModalEvent(){
    this.gameRaceForm.reset();
    this.closeModal.emit();
  }

  submitNewGameType(): void{
    console.log('new gamerace form submit...');

    if(!this.gameRaceForm.valid){
      console.log('...form not valid');
      return;
    }

    const saveObj: GameRace = { ...this.buildBody() };

    let submit$: Observable<GameRace>;

    switch(this.operation){
      case 'create':
        submit$ = this.apiCmaBackEndService.postNewGameRace(saveObj) as Observable<GameRace>;
        break;
      case 'update':
        submit$ = this.apiCmaBackEndService.putGameRace(saveObj) as Observable<GameRace>;
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
