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
  selector: 'app-gt-card',
  templateUrl: './gt-card.component.html'
})

export class GameTypeCard {
  showGameTypeForm: boolean = false;
  showGameTypeList: boolean = false;
  selectedGameType: GameType | undefined;
  operation: 'create' | 'update' = 'create';

  openGameTypeModal(){
    console.log(this.selectedGameType);
    this.showGameTypeForm = true;
  }

  closeGameTypeModal(){
    this.showGameTypeForm = false;
    this.operation = 'create';
    delete this.selectedGameType;
  }

  closeListModal(){
    this.showGameTypeList = false;
  }

  createFormSuccess(){}

  editGameType($event){
    console.log($event);
    this.selectedGameType = $event;
    this.operation = 'update';
    setTimeout(() => {
      this.closeListModal();
      this.openGameTypeModal();
    }, 250)
  }
}
