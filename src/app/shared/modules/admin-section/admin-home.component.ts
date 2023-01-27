import { Component, EventEmitter, Output,  } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiCmaBackEndService } from 'src/app/core/http-services/cma-be/api-cma-back-end.service';
import { IThemes } from 'src/app/shared/interfaces/themes.model';
import { Campaign, CampaignResponse } from 'src/app/shared/models/campaign.model';
import { CampaignsService } from 'src/app/shared/services/campaigns.service';
import { BaseBackendConstraints } from 'src/environments/environment';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})

export class AdminHome {

}
