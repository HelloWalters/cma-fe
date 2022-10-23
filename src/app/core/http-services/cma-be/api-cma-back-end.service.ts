import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Campaign } from 'src/app/shared/models/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCmaBackEndService {
  private serviceEndpoint: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {
  }

  public setEndpoint(endpoint: string){
    this.serviceEndpoint = endpoint;
  }

  public getAllCampaigns(){
    return this.httpClient.get<Campaign[]>(`${this.serviceEndpoint}/getAllCampaigns`)
  }
}
