import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Moment } from "moment";
import { BehaviorSubject, tap, combineLatest, map, switchMap, catchError, of, Observable } from "rxjs";
import { ApiCmaBackEndService } from "src/app/core/http-services/cma-be/api-cma-back-end.service";
import { BaseBackendConstraints } from "src/environments/environment";
import { IPagination, defaultPagination } from "../interfaces/pagination";
import { CampaignResponse } from "../models/campaign.model";
import { GameType } from "../models/game-models/gametype.model";

@Injectable ({ providedIn: 'root' })

export class AdminService{

  constructor(private apiCmaBackEndService: ApiCmaBackEndService){
    this.apiCmaBackEndService.setEndpoint(BaseBackendConstraints.CMA_BE);
  }

  isLoadingSubject = new BehaviorSubject<boolean>(true);
  isloading$ = this.isLoadingSubject.asObservable();
  gameTypes$ = this.apiCmaBackEndService.getGameTypes().pipe(
    catchError(
      () => of(0)
    )
  ) as Observable<GameType[]>;
}
