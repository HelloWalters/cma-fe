import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campaign, CampaignResponse } from 'src/app/shared/models/campaign.model';
import { ICampaignRequest } from 'src/app/shared/services/campaigns.service';
import { Observable } from 'rxjs';
import { GameType } from 'src/app/shared/models/game-models/gametype.model'

@Injectable({
  providedIn: 'root',
})
export class ApiCmaBackEndService {
  private serviceEndpoint: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  public getCurrentUser() {
    return this.httpClient.get<any>(`${this.serviceEndpoint}/api/currentUser`);
  }

  public setEndpoint(endpoint: string) {
    this.serviceEndpoint = endpoint;
  }

  public postNewGameType(gameType: GameType){
    return this.httpClient.post(`${this.serviceEndpoint}/createGameType`, gameType);
  }

  public putGameType(gameType: GameType){
    return this.httpClient.put(`${this.serviceEndpoint}/updateGameType`, gameType);
  }

  public getGameTypes(): Observable<GameType[]> {
    return this.httpClient.get<GameType[]>(`${this.serviceEndpoint}/getGameTypes`,{});
  }

  public postNewCampaign(campaign: Campaign) {
    return this.httpClient.post(`${this.serviceEndpoint}/createCampaign`, campaign);
  }
  public getCampaigns(request: ICampaignRequest): Observable<CampaignResponse[]> {
    return this.httpClient.get<CampaignResponse[]>(
      `${this.serviceEndpoint}/getCampaigns`, {
        params:{
        }
      }
    );
  }
}
