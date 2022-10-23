import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Moment } from "moment";
import { BehaviorSubject, tap, combineLatest, map } from "rxjs";
import { ApiCmaBackEndService } from "src/app/core/http-services/cma-be/api-cma-back-end.service";
import { BaseBackenConstraints } from "src/environments/environment";
import { IPagination } from "../interfaces/pagination";

interface ICampaignFilter {
  active: boolean;
  name: string;
  dmId: string;
  createdAt?: Moment;
}

interface ICampaignRequest extends ICampaignFilter, IPagination{}

@Injectable ({ providedIn: 'root' })
export class CampaignsService{
  constructor(private apiCmaBackEndService: ApiCmaBackEndService){
    this.apiCmaBackEndService.setEndpoint(BaseBackenConstraints.CMA_BE);
  }
  isLoadingSubject = new BehaviorSubject<boolean>(true);
  isloading$ = this.isLoadingSubject.asObservable();
  campaigns$ = this.apiCmaBackEndService.getAllCampaigns().pipe(
    tap(() => this.isLoadingSubject.next(true))
  );
  campaignList$ = combineLatest([this.campaigns$]).pipe(
    map(([data]) => {
      return { data };
    })
  )
}
