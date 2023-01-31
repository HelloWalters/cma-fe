import { Component, EventEmitter, Output,  } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiCmaBackEndService } from 'src/app/core/http-services/cma-be/api-cma-back-end.service';
import { IThemes } from 'src/app/shared/interfaces/themes.model';
import { Campaign, CampaignResponse } from 'src/app/shared/models/campaign.model';
import { GameType } from 'src/app/shared/models/game-models/gametype.model';
import { CampaignsService } from 'src/app/shared/services/campaigns.service';
import { BaseBackendConstraints } from 'src/environments/environment';

@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html'
})

export class GameRaceCard {
  showGameRaceForm: boolean = false;
  showGameRaceList: boolean = false;
  selectedGameRace: GameType;
  operation: 'create' | 'update' = 'create';

  openGameRaceModal(){
    console.log(this.selectedGameRace);
    this.showGameRaceForm = true;
  }

  closeGameRaceModal(){
    this.showGameRaceForm = false;
    this.operation = 'create';
  }

  closeListModal(){
    this.showGameRaceList = false;
  }

  createFormSuccess(){}

  editGameRace($event){
    console.log($event);
    this.selectedGameRace = $event;
    this.operation = 'update';
    setTimeout(() => {
      this.closeListModal();
      this.openGameRaceModal();
    }, 250)
  }
}
