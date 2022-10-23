import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Moment } from "moment";
import { BehaviorSubject, tap, combineLatest, map } from "rxjs";
import { ApiCmaBackEndService } from "src/app/core/http-services/cma-be/api-cma-back-end.service";
import { BaseBackendConstraints } from "src/environments/environment";
import { IPagination } from "../interfaces/pagination";

@Injectable ({ providedIn: 'root' })
export class UsersService{
  constructor(private apiCmaBackEndService: ApiCmaBackEndService){
    this.apiCmaBackEndService.setEndpoint(BaseBackendConstraints.CMA_BE);
  }
  isLoadingSubject = new BehaviorSubject<boolean>(true);
  isloading$ = this.isLoadingSubject.asObservable();
  currentUser$ = this.apiCmaBackEndService.getCurrentUser().pipe(
    tap(() => this.isLoadingSubject.next(true))
  );
  user$ = combineLatest([this.currentUser$]).pipe(
    map(([data]) => {
      return { data };
    })
  )
}
