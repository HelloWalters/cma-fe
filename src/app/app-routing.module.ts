import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsPage } from './shared/modules/campaigns/campaigns-page.component';
import { HomePage } from './shared/modules/home/home.component';
import { CampaignIndex } from './shared/modules/campaign-index/campaign-index.component';
import { AdminHome } from './shared/modules/admin-section/admin-home.component';

const routes: Routes = [
  { path: 'campaign', component: CampaignIndex },
  { path: 'campaigns', component: CampaignsPage },
  { path: 'admin', component: AdminHome },
  { path: '', component: HomePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
