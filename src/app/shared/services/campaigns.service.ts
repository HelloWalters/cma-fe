import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Moment } from "moment";
import { BehaviorSubject, tap, combineLatest, map, switchMap, catchError, of, Observable } from "rxjs";
import { ApiCmaBackEndService } from "src/app/core/http-services/cma-be/api-cma-back-end.service";
import { BaseBackendConstraints } from "src/environments/environment";
import { IPagination, defaultPagination } from "../interfaces/pagination";
import { CampaignResponse } from "../models/campaign.model";

interface ICampaignFilter {
  active?: boolean;
  name?: string;
  description?: string;
  tags?: string;
  dmId?: string;
  createdAt?: Moment;
}

export interface ICampaignRequest extends ICampaignFilter, IPagination{}

@Injectable ({ providedIn: 'root' })
export class CampaignsService{

  constructor(private apiCmaBackEndService: ApiCmaBackEndService){
    this.apiCmaBackEndService.setEndpoint(BaseBackendConstraints.CMA_BE);
  }

  requestSubject = new BehaviorSubject<ICampaignRequest>(defaultPagination);
  requestObject$ = this.requestSubject.asObservable();

  isLoadingSubject = new BehaviorSubject<boolean>(true);
  isloading$ = this.isLoadingSubject.asObservable();
  campaigns$ = this.requestObject$.pipe(
    switchMap((requestObject) => {
      return this.apiCmaBackEndService.getCampaigns(requestObject).pipe(
        catchError(() => of(0))
      ) as Observable<CampaignResponse[]>
    })
  );


}
